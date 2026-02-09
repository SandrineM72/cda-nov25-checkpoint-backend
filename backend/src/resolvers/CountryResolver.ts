import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { validate } from "class-validator";
import { Country } from "../entities/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country]) // renvoie la liste de tous les pays
  async countries(): Promise<Country[]> {
    return await Country.find(); 
  }

  @Query(() => Country, { nullable: true }) // renvoie un seul pays quand on fournit le code
  async country(@Arg("code") code: string): Promise<Country | null> {
    return await Country.findOneBy({ code });
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string
  ): Promise<Country> {
    const country = Country.create({ code, name, emoji });
    
    const errors = await validate(country);
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
    
    await country.save();
    return country;
  }
}
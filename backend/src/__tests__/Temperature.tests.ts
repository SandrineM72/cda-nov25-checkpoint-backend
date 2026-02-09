function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

describe("celsiusToFahrenheit", () => {
  it("should convert 0°C to 32°F", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  it("should convert 100°C to 212°F", () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

});

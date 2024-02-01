const { readFileSync, writeFileSync } = require("fs");

function checkConfig() {
  const configFile = readFileSync("./config.json", { encoding: "utf-8", flag: "a+" });
  if (!configFile.length) {
    writeFileSync(
      "./config.json",
      JSON.stringify({ TOKEN: "MTIwMjY5NzI3MzM5MDM5OTUwOA.GowoLl.dAmydsS9OXJJdEeAginMBDuByoXSI3PLGV6DdE" }, undefined, 2)
    );
    console.warn("[CONFIG] Config dosyası sıfırdan oluşturuldu. Lütfen ayarları doldurunuz.");
    return false;
  }
  return true;
}

module.exports = {
  checkConfig,
};

let fs = require("fs");
const preparePackageVersion = (
  majorVersionNum,
  minorVersionNum,
  patchVersionNum,
  currentTimestamp,
  betaVersionPatchNum
) => {
  return (
    majorVersionNum +
    "." +
    minorVersionNum +
    "." +
    patchVersionNum +
    "-" +
    "beta" +
    currentTimestamp +
    "." +
    betaVersionPatchNum
  );
};

if (fs.existsSync("./package.json")) {
  let packageDetail = require("./package.json");
  let currentVersion = packageDetail.version;
  let versionDetailList = currentVersion.split(".");
  let majorVersionNum = parseInt(versionDetailList[0]);
  let minorVersionNum = parseInt(versionDetailList[1]);
  let betaVersionPatchNum = parseInt(versionDetailList[3]);
  let betaVersionDetail = versionDetailList[2].split("-");
  let patchVersionNum = parseInt(betaVersionDetail[0]);
  let betaTimestamp = betaVersionDetail[1].replace("beta", "");
  let currentTimestamp = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  let type = process.argv[2];
  if (!["major", "minor", "patch"].includes(type)) {
    type = "beta";
  }

  if (type === "major") {
    ++majorVersionNum;
    minorVersionNum = 0;
    betaVersionPatchNum = 1;
  } else if (type === "minor") {
    ++minorVersionNum;
    patchVersionNum = 1;
    betaVersionPatchNum = 1;
  } else if (type === "patch") {
    ++patchVersionNum;
    betaVersionPatchNum = 1;
  } else {
    betaVersionPatchNum =
      betaTimestamp !== currentTimestamp ? 1 : ++betaVersionPatchNum;
  }
  let updatedPackageVersion = preparePackageVersion(
    majorVersionNum,
    minorVersionNum,
    patchVersionNum,
    currentTimestamp,
    betaVersionPatchNum
  );

  console.log("updatedPackageVersion", updatedPackageVersion);
  packageDetail.version = updatedPackageVersion;
  fs.writeFileSync("./package.json", JSON.stringify(packageDetail, null, 2));
}

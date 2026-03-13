const GITHUB_APK_URL =
  "https://github.com/mehedihasanrabbivip/BdSports-Web/releases/download/v1.0/bdsports.apk";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  // শুধু redirect করবো GitHub release URL-এ
  // সব ডাটা/ব্যান্ডউইথ সরাসরি GitHub হ্যান্ডেল করবে
  res.writeHead(302, {
    Location: GITHUB_APK_URL,
  });
  res.end();
}

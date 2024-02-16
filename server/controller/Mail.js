const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");

exports.sendotp = async (req, res) => {
	try {
		const {email} = req.body;

		// Check if user is already present
		// Find user with provided email
		// const checkUserPresent = await User.findOne({ email });
		// to be used in case of signup

		// If user found with provided email
		// if (checkUserPresent) {
		// 	// Return 401 Unauthorized status code with error message
		// 	return res.status(401).json({
		// 		success: false,
		// 		message: `User is Already Registered`,
		// 	});
		// }

		var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		});
		// const result = await OTP.findOne({ otp: otp });
		// console.log("Result is Generate OTP Func");
		// console.log("OTP", otp);
		// console.log("Result", result);
		// while (result) {
		// 	otp = otpGenerator.generate(6, {
		// 		upperCaseAlphabets: false,
		// 	});
		// }
		const otpPayload = { email, otp };
		const otpBody = await OTP.create(otpPayload);
		console.log("OTP Body", otpBody);
		const mainResponse = await mailSender(email, "Email From CUH-NIRF", `Your otp is ${otp}`);
		console.log("Corrected:", mainResponse);
		res.status(200).json({
			success: true,
			message: `OTP Sent Successfully`,
			otp,
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({ success: false, error: error.message });
	}
};
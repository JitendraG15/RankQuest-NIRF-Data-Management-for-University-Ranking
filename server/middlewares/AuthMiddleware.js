const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");


// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
	try {
		// Extracting JWT from request cookies, body, or header
		console.log("Body:",req.body.token);
		const token =
			req.cookies.token ||
			req.body.token ||
			(req.headers["authorization"] && req.headers["authorization"].replace("Bearer ", ""));

		console.log("Token In Auth Middleware:", token);

		// If JWT is missing, return 401 Unauthorized response
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Token Can't be Fetched",
				token
				
			});
		}

		try {
			// Verifying the JWT using the secret key stored in environment variables
			// console.log("JWT_SECRET:", process.env.JWT_SECRET);
			const decode = await jwt.verify(token, process.env.JWT_SECRET);
			// console.log("Decoded Token in Middleware:", decode);

			// Storing the decoded JWT payload in the request object for further use
			req.user = decode;
			console.log("req.user", req.user);

			// If JWT is valid, move on to the next middleware or request handler
			console.log("Token Successfully Verified");
			next();
		} catch (error) {
			// If JWT verification fails, return 401 Unauthorized response
			console.error("Error while verifying token:", error);
			return res.status(401).json({ success: false, message: "Token is invalid" });
		}
	} catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		console.error("Error:", error);
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
};


exports.isStudent = async (req, res, next) => {
	try {
		const userDetails = await Student.findOne({ email: req.user.email });
		

		if (!userDetails || userDetails.role !== "Student") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Students Only",
			});
		}

		console.log("isStudent:", userDetails);
		console.log("Role:", userDetails.role);
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};


exports.isAdmin = async (req, res, next) => {
	try {
		const userDetails = await Faculty.findOne({ email: req.user.email });

		if (userDetails.role !== "Admin") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Admin",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};
const BankDetails = require("../../model/bankDetailsSchema");
const Host = require('../../model/hostSchema');

const addBankDetails = async (req, res) => {
  const { hostId } = req.params;
  const { accountHolderName, accountNumber, bankName, branch, ifscCode } =
    req.body;

  try {
    const host = await Host.findById(hostId);
    if (!host) {
      return res.status(404).json({ success: false, message: 'Host not found' });
    }

    const bankDetails = new BankDetails({
      hostId,
      accountHolderName,
      accountNumber,
      bankName,
      branch,
      ifscCode,
    });

    await bankDetails.save();

    res
      .status(201)
      .json({ message: "Bank details added successfully", success: true });
  } catch (error) {
    console.error("Error adding bank details:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  addBankDetails,
};

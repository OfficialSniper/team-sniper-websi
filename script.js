function generateQRCode() {
    var amount = document.getElementById("amount").value;
    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    
    // Fixed UPI ID
    var upiID = "anmol@fam";
    
    // UPI Payment Link
    var upiLink = `upi://pay?pa=${upiID}&pn=TeamSniper&am=${amount}&cu=INR&tn=Payment`;
    
    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";
    
    // Generate new QR code
    new QRCode(document.getElementById("qrcode"), {
        text: upiLink,
        width: 200,
        height: 200
    });
}

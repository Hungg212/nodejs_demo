// Hàm hiển thị tên và tuổi
function displayInfo(name, age) {
    console.log(`Họ tên: ${name}`);
    console.log(`Tuổi: ${age}`);
}

// Hàm tính tuổi từ năm sinh
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Gọi thử
let name = "Nguyen Van A";
let birthYear = 2000;

let age = calculateAge(birthYear);

displayInfo(name, age);
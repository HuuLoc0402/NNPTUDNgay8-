const ExcelJS = require('exceljs');
const path = require('path');

async function createNewExcel() {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Users');

        // Add header row
        worksheet.addRow(['username', 'email']);

        // Add sample data
        const users = [
            ['user01', 'user01@haha.com'],
            ['user02', 'user02@haha.com'],
            ['user03', 'user03@haha.com'],
            ['user04', 'user04@haha.com'],
        ];

        // Add data rows
        users.forEach(user => {
            worksheet.addRow(user);
        });

        // Format columns
        worksheet.columns[0].width = 20;
        worksheet.columns[1].width = 30;

        const filePath = path.join(__dirname, 'uploads', 'user.xlsx');
        await workbook.xlsx.writeFile(filePath);

        console.log('✅ File user.xlsx đã được tạo thành công!');
        console.log('📁 Location:', filePath);
        console.log('📊 Data:');
        users.forEach(user => {
            console.log(`   ${user[0]} | ${user[1]}`);
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

createNewExcel();

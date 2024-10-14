// async function  getData(){
//     const excel = await require('exceljs');
//     var data = await [];

//     const workbook =  await new excel.Workbook();
//     await workbook.xlsx.readFile('C:/Users/10742817/OneDrive - LTIMindtree/Desktop/chethan/prasctise/playwright_practice/data/excel.xlsx');
//     const mysheet = await workbook.worksheets[0];
    
//     for(let i =0; i< mysheet.rowCount; i++){
//         const product = await mysheet.getCell(i,0).value;
//         await data.push({product : product});
//     }

//     return await data;
// }

// console.log(getData());



// =============================================

// import {Workbook} from 'exceljs';
async function loaddata(){
    const data_arr=[];
    const myexcel=await require('exceljs');
    const myworkbook=new myexcel.Workbook();
    await myworkbook.xlsx.readFile('C:/Users/10742817/OneDrive - LTIMindtree/Desktop/chethan/prasctise/playwright_practice/data/excel.xlsx');
    const mysheet=myworkbook.worksheets[0];
    for(let i=2;i<=mysheet.rowCount; i++){  
        const product=mysheet.getCell(i,0).value;
        // const lname=mysheet.getCell(i,2).value;
        // const email=mysheet.getCell(i,3).value;
        // const password=mysheet.getCell(i,4).value;
        data_arr.push({prod :product});                  
    }
    return data_arr;
}

let data = loaddata();
console.log(data);

var thuVien = [
    {
        tieuDe:  'The Road Ahead',
        tacGia: 'Bill Gates',
        IDThuVien: 1254
    },
    {
        tieuDe: 'Walter Isaacson',
        tacGia: 'Steve Jobs',
        IDThuVien: 4264
    },
    {
        tieuDe: 'Mockingjay: The Final Book of The Hunger Games',
        tacGia: 'Suzanne Collins',
        IDThuVien: 3245
    }];
 
    //thuVien.sort((a, b) => a.IDThuVien.localeCompare(b.IDThuVien)); // sai ? 
    thuVien.sort((a, b) => a.tieuDe.localeCompare(b.tieuDe));
   // thuVien.sort((a, b) => a.tacGia.localeCompare(b.tacGia));
    console.log(thuVien); 
   

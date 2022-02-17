import XLSX from 'xlsx';

/**
 * 下载/解析 excel 到 html
 * 
 * @param {string} url 要请求的后端地址
 * @param {string} token 后端验证 token
 * @param {object} postData 接口请求数据
 * @returns {string} excel 的 html 内容
 */
export const fetchExcelHtml = async (url, token, postData) => {
    return new Promise((resolve, reject) => {
        try {
            const req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.setRequestHeader('token', token);
            req.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            req.responseType = 'arraybuffer';

            req.onload = () => {
                const data = new Uint8Array(req.response);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetNames = workbook.SheetNames;
                const workSheet = workbook.Sheets[sheetNames[0]];
                const html = XLSX.utils.sheet_to_html(workSheet);
                resolve(html);
            };
            req.send(JSON.stringify(postData));
        }
        catch (e) {
            reject(e);
        }
    })
}

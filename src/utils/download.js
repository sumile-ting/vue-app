import axios from "axios";
import {baseUrl} from '@/utils/http'
import {Message} from "element-ui";
/**
 * huofw create
 */

/* MIME文件类型对应值，如果还需要其它文件类型，在网上查询添加即可 */
export const BLOBTYPE = {
    XLS : 'application/vnd.ms-excel',     // .xls文件h
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',  // .xlsx文件
    DOC : 'application/msword',            // .doc文件
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',            // .docx文件
    PDF : 'application/pdf',                // .pdf文件
    PPT : 'application/vnd.ms-powerpoint',  // .ppt文件
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',  // .pptx文件
    ZIP : 'application/zip',  // .zip文件
    JPEG: 'image/jpeg',
    GIF : 'image/gif',
    // ...
};

/**
 * 下载文件通用接口.
 * @param options   后台传递的参数
 * @param exportUrl 后台访问url
 * @param type  下载对应的文件类型,取自于上面的 BLOBTYPE
 * @returns {Promise<unknown>}
 */
export const exportFile = (options,exportUrl,type) => {

  return new Promise((resolve, reject) => {
    axios.defaults.headers["content-type"] = "application/json;charset=UTF-8";
    axios({
      baseURL: baseUrl,
      method: "post",
      url: exportUrl, // 请求地址
      data: options, // 参数
      responseType: "blob", // 表明返回服务器返回的数据类型
      headers: {"Content-Type": "application/json"}
    }).then(
      response => {
        resolve(response.data);
        console.log(response);
        let blob = new Blob([response.data], {type: type});
        // 下载后文件名
        let fileName = decodeURIComponent(response.headers['content-disposition'].split('filename=')[1]);
        if (window.navigator.msSaveOrOpenBlob) {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName);
        } else {
          // 非IE下载
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = fileName;
          link.click();
          //释放内存
          window.URL.revokeObjectURL(link.href);
        }
      },
      err => {
        reject(err);
      }
    ).catch(err=>{
        console.log(err.toString());
        Message({
            message: '下载失败!',
            type: "error"
        });
    });
  });
};


// 上传文件
export function uploadFile (url, file) {
    var url2 = baseUrl+ url;
    let formData = new FormData();
    formData.append('file', file);
    return axios({
        baseURL: baseUrl,
        method: 'post',
        url: url2,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}


export default function (reqData) {
    //console.log('this is checkreqdata')
  //  console.log(reqData)
    if (reqData.code === 0) {
        return reqData.data
    } else {
        return;
    }
}
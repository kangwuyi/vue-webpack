export default function (reqData) {console.log(reqData)
    if (reqData.code === 0) {
        return reqData.data
    } else {
        return;
    }
}
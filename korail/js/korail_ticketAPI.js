//인증키
const key = '5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D';

// 1. 출/도착지기반열차정보 조회 //차량종류코드=00
const url1= `https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D&pageNo=1&numOfRows=10&_type=json&depPlaceId=NAT010000&arrPlaceId=NAT011668&depPlandTime=20211201&trainGradeCode=00`;

// 2.시/도별 기차역 목록조회  //충북ID=33
const url2 = `https://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=${key}&pageNo=1&numOfRows=10&_type=json&cityCode=12`;

// 3. 차량종류 목록 조회
const url3 = `https://apis.data.go.kr/1613000/TrainInfoService/getVhcleKndList?serviceKey=${key}&_type=json`;

// 도시코드 목록 조회 //16개
const url4 = `https://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList?serviceKey=${key}&_type=json`;

// $.getJSON(url1, function (result) {
//     console.log(result.response.body.items)
    
//     let Result = result.response.body.items.item[0];

//     Nb.innerText = Result.trainno;
//     DepartTime.innerText = Result.arrplandtime;
//     ArrivalTime.innerText = Result.depplandtime;
//     Depart.innerText = Result.arrplacename;
//     Arrival.innerText = Result.depplacename;
//     Price.innerText = Result.adultcharge;
//     TrainNb.innerText = Result.traingradename;
// })

$.ajax({
    type:"GET",
    url:`https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D&pageNo=1&numOfRows=10&_type=json&depPlaceId=NAT010000&arrPlaceId=NAT011668&depPlandTime=20211201&trainGradeCode=00`,
    dataType:"json",
    Success: function(data){
        var elem ="";
        console.log(data);
    }

})
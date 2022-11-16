//인증키
const key = '5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D';

// 1. 출/도착지기반열차정보 조회 //차량종류코드=00
const url1= `https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D&pageNo=1&_type=json&depPlaceId=NAT010032&arrPlaceId=NAT050044&depPlandTime=20221115&trainGradeCode=00`;
// NAT050044 기차역 ID 오송
// NAT010032 기차역 ID 용산
// 추가할 것1: 오늘날짜 추출해서 오픈할 때 마다 당일 모두출력하도록 만들기
// 추가할 것2: 현재시간 이후 열차만 출력하기

// 2.시/도별 기차역 목록조회  //충북ID=33
const url2 = `https://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=${key}&pageNo=1&numOfRows=10&_type=json&cityCode=33`;

// 3. 차량종류 목록 조회
const url3 = `https://apis.data.go.kr/1613000/TrainInfoService/getVhcleKndList?serviceKey=5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D&_type=json`;

// 도시코드 목록 조회 //16개
const url4 = `https://apis.data.go.kr/1613000/TrainInfoService/getCtyCodeList?serviceKey=5965EJRdBGHjG4eGQZWF%2Fp2mReN24j61ZywRPMfS1adDWiSGt7rCo2HjqIT2IRvZ%2BTKlJmQo%2FsqYBH1GB8gAdw%3D%3D&_type=json`;

$.getJSON(url1, function (data) {
    // console.log(data.response.body.items)
    
    let trainData = data.response.body.items.item;
    // console.log(trainData.length)
    
    const noResult = document.querySelector('.noResult');
    result.removeChild(noResult);

    function createTrainInfoTR(index){
        var tr = document.createElement('tr')
        
        // 열차번호생성
        function trainnoTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].trainno)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        // 도착시간
        // DepartTime.innerText = trainData.arrplandtime;
        function arrplandtimeTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].arrplandtime)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        // 출발시간
        // ArrivalTime.innerText = trainData.depplandtime;
        function depplandtimeTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].depplandtime)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        // 출발역
        // Depart.innerText = trainData.arrplacename;
        function arrplacenameTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].arrplacename)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        // 도착역
        // Arrival.innerText = trainData.depplacename;
        function depplacenameTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].depplacename)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        // 운임요금
        // Price.innerText = trainData.adultcharge;
        function adultchargeTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].adultcharge)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        // 열차종류
        // TrainNb.innerText = trainData.traingradename;
        function traingradenameTD(index){
            let td = document.createElement('td')
            let txt = document.createTextNode(trainData[index].traingradename)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        
        // 열차정보 7개 담은 tr 생성
        trainnoTD(index)
        arrplandtimeTD(index)
        depplandtimeTD(index)
        arrplacenameTD(index)
        depplacenameTD(index)
        adultchargeTD(index)
        traingradenameTD(index)
        result.appendChild(tr)
        
    }
    // createTrainInfoTD(0)
    for(var i = 0;i<trainData.length; i++){
        createTrainInfoTR(i)
    }

})

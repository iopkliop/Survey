function handleRadioClick(radioId, labelId) {
    // 라벨의 현재 값 가져오기
    var currentValue = parseInt(document.getElementById(labelId).textContent);
    
    // 값 증가시키기
    var newValue = currentValue + 1;
    document.cookie=newValue;
    
    // 증가된 값을 라벨에 설정하기
    document.getElementById(labelId).textContent = newValue.toString();
  }
  
  // 제출 버튼 클릭 이벤트 핸들러
  function handleSubmitButtonClick() {
    // 각 라디오 버튼의 상태 확인
    alert("제출 되었습니다!");
    var options = document.getElementsByName("option");
    
    // 선택된 라디오 버튼의 값 가져오기
    var selectedOption;
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selectedOption = options[i].value;
        break;
      }
    }
    
    // 선택된 라디오 버튼의 값을 기반으로 해당 라벨의 값 증가시키기
    var labelId = "l" + selectedOption.substr(selectedOption.length - 1);
    handleRadioClick(selectedOption, labelId);
  }
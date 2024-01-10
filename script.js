function handleRadioClick(radioId, labelId) {
  var currentValue = parseInt(document.getElementById(labelId).textContent);
  var newValue = currentValue + 1;
  document.getElementById(labelId).textContent = newValue;

  // 값 증가 후 쿠키에 저장
  document.cookie = labelId + "=" + newValue + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
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
  window.onload = function() {
    var labels = document.getElementsByClassName("label");
  
    for (var i = 0; i < labels.length; i++) {
      var labelId = labels[i].id;
      var value = getCookie(labelId);
  
      if (value !== "") {
        document.getElementById(labelId).textContent = value;
      }
    }
  };
  
  function getCookie(name) {
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1);
      }
    }
  
    return "";
  }
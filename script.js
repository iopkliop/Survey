/*
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
function handleRadioClick(radioId, labelId) {
  var currentValue = parseInt(document.getElementById(labelId).textContent);
  var newValue = currentValue + 1;
  document.getElementById(labelId).textContent = newValue;

  // 값 증가 후 쿠키에 저장
  document.cookie = labelId + "=" + newValue ;
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
  */
  window.onload = function() {
    for (var i = 1; i <= 6; i++) {
      var labelValue = getLabelValue("label" + i);
      if (labelValue) {
        document.getElementById("label" + i).textContent = labelValue;
      }
    }
  };
  
  function incrementLabelValue(labelIndex) {
    var currentValue = parseInt(document.getElementById("label" + labelIndex).textContent);
    var newValue = currentValue + 1;
    document.getElementById("label" + labelIndex).textContent = newValue;
  }
  
  function submitLabelValue() {
    for (var i = 1; i <= 6; i++) {
      var currentValue = parseInt(document.getElementById("label" + i).textContent);
      setLabelValue("label" + i, currentValue);
      
    }
    
    alert("제출 되었습니다!");
  }
  
  function setLabelValue(labelId, value) {
    localStorage.setItem(labelId, value);
  }
  
  function getLabelValue(labelId) {
    return localStorage.getItem(labelId);
  }
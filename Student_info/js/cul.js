const students = [
    { name: "Ana", scores: [85, 90, 88], present: true },
    { name: "Ben", scores: [70, 75, 72], present: false },
    { name: "Cara", scores: [95, 92, 94], present: true },
    { name: "Daniel", scores: [60, 65, 70], present: true },
    { name: "Ella", scores: [88, 85, 90], present: true },
    { name: "Felix", scores: [78, 80, 82], present: false },
    { name: "Grace", scores: [92, 89, 94], present: true },
    { name: "Hannah", scores: [73, 70, 68], present: false },
    { name: "Ivan", scores: [81, 84, 79], present: true },
    { name: "Julia", scores: [96, 98, 97], present: true }
  ];
  
  let currentData = students;
  
  // COMPUTE AVERAGE
  function getAverage(scores) {
    return (scores.reduce((a, b) => a + b) / scores.length).toFixed(2);
  }
  
  // REMARKS
  function getRemarks(avg) {
    return avg >= 75 ? "Passed" : "Failed";
  }
  
  // DISPLAY TABLE
  function display(data) {
    const body = document.getElementById("tableBody");
    body.innerHTML = "";
  
    data.forEach(s => {
      const avg = getAverage(s.scores);
      const remark = getRemarks(avg);
  
      body.innerHTML += `
        <tr>
          <td>${s.name} (${s.present ? "Present" : "Absent"})</td>
          <td>${s.scores[0]}</td>
          <td>${s.scores[1]}</td>
          <td>${s.scores[2]}</td>
          <td>${avg}</td>
          <td class="${remark === "Passed" ? "pass" : "fail"}">${remark}</td>
        </tr>
      `;
    });
  }
  
  // SEARCH BAR
  function searchStudent() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
  
    if (keyword === "") {
      display(students);
      return;
    }
  
    const result = students.filter(s =>
      s.name.toLowerCase().includes(keyword)
    );
  
    display(result);
  }
  
  // ENTER KEY SUPPORT
  document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      searchStudent();
    }
  });
  
  // FILTERS
  function showAll() {
    currentData = students;
    display(currentData);
  }
  
  function filterAttendance(status) {
    currentData = students.filter(s => s.present === status);
    display(currentData);
  }
  
  function filterResult(result) {
    currentData = students.filter(s => {
      const avg = getAverage(s.scores);
      return getRemarks(avg) === result;
    });
    display(currentData);
  }
  
  // INITIAL LOAD
  display(students);
  
  
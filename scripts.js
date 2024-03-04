// Mảng để lưu trữ các câu hỏi
let questionsArray = [];

// Hàm thêm câu hỏi mới vào danh sách
function addQuestion() {
    // Lấy thông tin từ người dùng
    const questionText = prompt("Nhập nội dung của câu hỏi:");
    const answerOptions = prompt("Nhập các lựa chọn, cách nhau bằng dấu phẩy:").split(',');

    // Tạo đối tượng câu hỏi
    const newQuestion = {
        text: questionText,
        options: answerOptions
    };

    // Thêm câu hỏi vào mảng
    questionsArray.push(newQuestion);

    // Hiển thị câu hỏi trong danh sách
    displayQuestions();
}


// Hàm chỉnh sửa câu hỏi
function editQuestion() {
    // Lấy chỉ mục của câu hỏi cần chỉnh sửa từ người dùng
    const indexToEdit = prompt("Nhập chỉ mục của câu hỏi bạn muốn chỉnh sửa:")-1;

    // Kiểm tra xem chỉ mục có hợp lệ không
    if (indexToEdit >= 0 && indexToEdit < questionsArray.length) {
        // Lấy thông tin mới từ người dùng
        const updatedText = prompt("Nhập nội dung mới của câu hỏi:");
        const updatedOptions = prompt("Nhập các lựa chọn mới, cách nhau bằng dấu phẩy:").split(',');

        // Cập nhật thông tin câu hỏi
        questionsArray[indexToEdit].text = updatedText;
        questionsArray[indexToEdit].options = updatedOptions;

        // Hiển thị danh sách câu hỏi sau khi chỉnh sửa
        displayQuestions();
    } else {
        alert("Chỉ mục không hợp lệ.");
    }
}

function deleteQuestion() {
    // Lấy chỉ mục của câu hỏi cần xóa từ người dùng
    const indexToDelete = prompt("Nhập chỉ mục của câu hỏi bạn muốn xóa:")-1;

    // Kiểm tra xem chỉ mục có hợp lệ không
    if (indexToDelete >= 0 && indexToDelete < questionsArray.length) {
        // Xóa câu hỏi khỏi mảng
        questionsArray.splice(indexToDelete, 1);

        // Hiển thị danh sách câu hỏi sau khi xóa
        displayQuestions();
    } else {
        alert("Chỉ mục không hợp lệ.");
    }
}


function saveInf(){
    alert("Thông tin kỳ thi đã được lưu lại!")
}

// Hàm hiển thị danh sách câu hỏi
function displayQuestions() {
    const questionsList = document.getElementById('questions');

    // Xóa các câu hỏi hiện tại trong danh sách
    questionsList.innerHTML = '';

    // Hiển thị từng câu hỏi trong mảng
    questionsArray.forEach((question, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Câu hỏi ${index + 1}: ${question.text}`;
        // Hiển thị các lựa chọn (câu trả lời) của câu hỏi
        const answerList = document.createElement('ul');
        question.options.forEach((option, optionIndex) => {
            const answerItem = document.createElement('li');

            // Sử dụng radio để cho phép chọn nhiều câu trả lời
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = `q${index}_option${optionIndex}`;
            radio.name = `q${index}_options`; // Đặt cùng tên để chỉ cho phép chọn 1 radio button trong mỗi nhóm

            // Label cho radio
            const label = document.createElement('label');
            label.textContent = `${option}`;
            label.htmlFor = `q${index}_option${optionIndex}`;

            // Thêm radio và label vào danh sách câu trả lời
            answerItem.appendChild(radio);
            answerItem.appendChild(label);

            answerList.appendChild(answerItem);
        });
        // Đưa danh sách câu trả lời vào câu hỏi
        listItem.appendChild(answerList);
        
        questionsList.appendChild(listItem);
    });
}
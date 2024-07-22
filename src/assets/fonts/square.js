const square = {
  nameFont: "",
  detailOne: "Phép thuật văn bản unicode cực hay. Hình vuông 🅃🄴🅇🅃!",
  detailTw:
    "Sử dụng công cụ này để tạo các ô vuông xung quanh các chữ cái bạn nhập. Sử dụng công cụ này để đăng các manh mối về phong cách Hangman & Wheel of Fortune trên Twitter và Facebook. 🅆🄰🄽🄽🄰 🄱🅄🅈 🄰 🅅🄾🅆🄴🄻? Hoặc... sử dụng công cụ phông chữ chữ vuông này để làm cho văn bản của bạn trông sành điệu. Vì hông phải vuông ;)",
  detailThree: `
"Trình tạo văn bản vuông" của chúng tôi khai thác sức mạnh của khối "Bổ sung chữ và số kèm theo" trong Unicode, đặc biệt là các chữ cái viết hoa Latinh bình phương. Khả năng sáng tạo của việc thêm các ô hoặc hình vuông xung quanh các chữ cái là vô tận. Kỹ thuật tạo kiểu văn bản độc đáo này mở ra một thế giới sáng tạo, cho phép bạn nâng cao bài viết của mình theo những cách thú vị. Bạn có thể dán các chữ cái bình phương này vào bất kỳ đâu trên web để tạo dòng tiêu đề thu hút sự chú ý, tiêu đề hấp dẫn hoặc bài đăng bắt mắt tạo nên tuyên bố táo bạo. Bằng cách sử dụng Trình tạo văn bản hình vuông, bạn có thể tạo văn bản giống với các viên gạch, cửa sổ hoặc các phần tử pixel, có thể áp dụng trong nhiều ngữ cảnh sáng tạo khác nhau. Hình thức đặc biệt của các chữ cái bình phương tạo thêm nét hiện đại và hình học cho nội dung của bạn, khiến nội dung đó trở nên hấp dẫn và đáng nhớ về mặt hình ảnh. Với trình tạo văn bản hình vuông, bạn có thể thỏa sức sáng tạo và khám phá khả năng vô tận của việc kết hợp các chữ cái đóng hộp hoặc hình vuông vào thiết kế của mình.
    `,
  font: [
    {
      label: "Square",
      slug: "square",
      previewFont: "system",
      actions: [
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 127215,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 127183,
        },
      ],
      hasPreviewImages: false,
      textStyle: {
        path: "square-text",
      },
    },
    {
      label: "Black square",
      slug: "black-square",
      previewFont: "system",
      actions: [
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 127279,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 127247,
        },
      ],
      hasPreviewImages: false,
      textStyle: {
        path: "square-text",
      },
    }
  ],
};

export default square;

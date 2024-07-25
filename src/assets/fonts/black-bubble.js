import URL from "@/const";

const bubble = {
  nameFont: "",
  detailOne: "Phép thuật văn bản unicode cực hay. Muốn một ly ⓑⓤⓑⓑⓛⓨ?",
  detailTw:
    "Công cụ này tạo các ký tự văn bản bên trong vòng tròn hoặc bong bóng, có nền tối hoặc sáng. Các ký tự bong bóng này có thể được sử dụng bên trong các cập nhật trạng thái của Facebook hoặc Twitter, trong email và các nơi khác. Bạn có thể sử dụng văn bản bong bóng để biểu thị sự phấn khích, lý do ăn mừng hoặc để biểu thị điều gì đó quan trọng.",
  detailThree: `
Trình tạo văn bản bong bóng của chúng tôi sử dụng các ký tự từ khối Unicode "Chữ và số kèm theo" và "Bổ sung chữ và số kèm theo". Những ký tự này ban đầu được dự định hoạt động như những dấu đầu dòng được đánh số và đánh chữ trong danh sách có thứ tự. Chúng cung cấp một loạt các hình dạng khép kín và khác biệt về mặt trực quan có thể được sử dụng làm lựa chọn thay thế về mặt phong cách cho các dấu đầu dòng truyền thống. Mặc dù mục đích ban đầu của chúng là mang tính thực dụng, những ký tự kèm theo này cũng đã tìm thấy những ứng dụng sáng tạo trong nhiều bối cảnh khác nhau. Trình tạo "Văn bản bong bóng" sử dụng tính chất trang trí và quyến rũ của các ký tự kèm theo để tạo ra các kiểu văn bản hấp dẫn và hấp dẫn về mặt hình ảnh, thêm nét kỳ lạ và độc đáo cho nội dung văn bản.
    `,
  font: [
    {
      label: "Bubble text",
      slug: "bubble",
      previewFont: "times",
      actions: [
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 9333,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 9327,
        },
        {
          action: "shift_code_point",
          range: [49, 57],
          add: 9263,
        },
        {
          action: "map_code_point",
          map: {
            48: [9450],
          },
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "bubble-text",
      },
    },
    {
      label: "Black bubble text",
      slug: "black-bubble",
      previewFont: "system",
      actions: [
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 127247,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 127215,
        },
        {
          action: "shift_code_point",
          range: [49, 57],
          add: 10073,
        },
        {
          action: "map_code_point",
          map: {
            48: [9471],
          },
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "bubble-text",
      },
    },
    {
      label: "Parenthesis",
      slug: "parenthesis",
      previewFont: "times",
      actions: [
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 127183,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 9275,
        },
        {
          action: "shift_code_point",
          range: [49, 57],
          add: 9283,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "bubble-text",
      },
    }
  ],

  avatar: URL.BASE_URL+"/public/assets/images/bubble/avatar.png",
  previewImages: [
      URL.BASE_URL+"/assets/images/bubble/pre1.png",
      URL.BASE_URL+"/assets/images/bubble/pre2.png",
      URL.BASE_URL+"/assets/images/bubble/pre3.png",
  ]
};

export default bubble;

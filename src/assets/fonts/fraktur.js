const fraktur = {
  nameFont: "Fraktur",
  detailOne:
    "Fraktur, blackletter, tiếng Anh cổ hoặc văn bản gothic là một kiểu chữ viết văn bản được sử dụng cho các ngôn ngữ châu Âu bắt đầu từ thế kỷ 12. Phong cách này hiện nay chủ yếu được sử dụng cho mục đích trang trí, chẳng hạn như để gợi lên cảm giác cổ điển của từ cũ. Nó cũng có thể được sử dụng để gợi lên cảm giác kim loại nặng. Công cụ văn bản unicode này tạo ra văn bản chữ cái màu đen theo phong cách Fraktur có thể được sao chép vào tin nhắn Facebook và Twitter, nhận xét trên YouTube, tin nhắn SMS, v.v.",
  detailTw: "",
  detailThree: `
Fraktur, còn được gọi là Gothic hoặc Blackletter, có một lịch sử hấp dẫn có thể bắt nguồn từ thời trung cổ. Phong cách viết đặc biệt này xuất hiện ở nhiều nền văn hóa châu Âu khác nhau, bao gồm cả Đức và Scandinavia. Chữ viết Fraktur có các dạng chữ phức tạp, đậm nét với các nét góc cạnh, sắc nét. Trong khi Fraktur được sử dụng rộng rãi trong in ấn và viết trong thời Trung cổ và Phục hưng, sự phổ biến của nó giảm dần cùng với sự ra đời của các kiểu chữ hiện đại. Tuy nhiên, phông chữ Fraktur tiếp tục giữ một vị trí đặc biệt trong thiết kế, đặc biệt đối với các dự án nhằm gợi lên cảm giác về truyền thống, di sản hoặc thẩm mỹ Gothic. Chúng thường được sử dụng trong các thiết kế, bìa sách và các yếu tố trang trí lấy cảm hứng từ cổ điển để tăng thêm nét quyến rũ lịch sử. Mặc dù mức độ phổ biến đã giảm trong giao tiếp hàng ngày nhưng Fraktur vẫn có thể được sử dụng trên các nền tảng kỹ thuật số và mạng xã hội. Trình tạo văn bản gothic của chúng tôi có thể được sử dụng để kết hợp tập lệnh độc đáo này vào các bài đăng, hồ sơ hoặc tác phẩm nghệ thuật trên mạng xã hội. Bằng cách sử dụng văn bản Fraktur một cách chu đáo và có chọn lọc, bạn có thể truyền tải vào nội dung kỹ thuật số của mình một bầu không khí lôi cuốn và hoài cổ.
    `,
  font: [
    {
      label: "Fraktur",
      slug: "fraktur",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "map_code_point",
          map: {
            67: [8493],
            72: [8460],
            73: [8465],
            82: [8476],
            90: [8488],
          },
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 120003,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119997,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "fraktur",
      },
    },
    {
      label: "Bold fraktur",
      slug: "bold-fraktur",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 120107,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 120101,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "fraktur",
      },
    },
  ],
};

export default fraktur;

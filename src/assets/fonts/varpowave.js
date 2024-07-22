const varpowave = {
  nameFont: "",
  detailOne:
    "Phép thuật văn bản unicode cực hay. Tương lai là đây. ░▒▓ ＶΛＰＯＲＷΛＶΞ ▓▒░ ［ａｅｓｔｈｅｔｉｃ］",
  detailTw:
    "Văn bản có chiều rộng đầy đủ ban đầu được tạo ra để sử dụng cùng với văn bản tiếng Trung, tiếng Nhật và tiếng Hàn (CJK), nhưng kiểu văn bản này đã phát triển thành một kiểu văn bản riêng. Phong cách steamwave thường được sử dụng để tạo cảm giác cổ điển, cổ điển hoặc phông chữ của thập niên 80... ｌｉｋｅ ｔｈｉｓ. Kiểu văn bản kéo dài này đặc biệt phổ biến trong thể loại nhạc steamwave, đặc biệt là trên các trang web như SoundCloud và Bandcamp. Vì các phông chữ steamwave này được tạo bằng các ký tự Unicode nên chúng có thể dễ dàng được sao chép và dán vào Facebook, Twitter, YouTube, v.v.",
  detailThree: `

    Khối Unicode dạng nửa băng thông và toàn băng thông bao gồm các ký tự bằng Unicode duy trì độ rộng nhất quán cùng với các ký tự CJK. Ban đầu được phát triển cho các bộ ký tự Đông Á như chữ viết tiếng Trung, tiếng Nhật và tiếng Hàn (CJK) để phù hợp với hình vuông của các ký tự CJK, những ký tự này đóng một vai trò quan trọng trong việc duy trì khoảng cách và bố cục hình ảnh trong những ngày đầu của máy tính.

Tuy nhiên, Khối Unicode toàn chiều rộng hiện đã tìm thấy các ứng dụng rộng hơn ngoài văn bản CJK. Các ký tự có chiều rộng đầy đủ thường được sử dụng cho mục đích thẩm mỹ và sáng tạo trong nhiều ngữ cảnh khác nhau, vượt xa mục đích sử dụng ban đầu của chúng. Với chiều rộng được mở rộng, những ký tự này có thể tạo ra những thiết kế ấn tượng về mặt thị giác.

Trong phương tiện truyền thông xã hội, các ký tự có chiều rộng đầy đủ được sử dụng một cách sáng tạo trong chú thích bắt mắt, tên người dùng đặc biệt và kiểu chữ độc đáo để nhấn mạnh. Cộng đồng thiết kế thường kết hợp các ký tự có chiều rộng đầy đủ để tạo thêm nét hiện đại và độc đáo cho biểu tượng, dòng tiêu đề và bố cục hình ảnh. Hơn nữa, các cá nhân thích sử dụng các ký tự có độ rộng đầy đủ trong văn bản cá nhân hoặc sáng tạo để mang lại phong cách trực quan hấp dẫn và độc đáo cho văn bản của họ.

Khối Unicode dạng nửa băng thông và toàn băng thông, với các ký tự rộng hơn, cho phép trình bày văn bản sáng tạo và hấp dẫn trực quan ngoài các ngôn ngữ CJK. Nó đã trở thành một công cụ có giá trị để thể hiện nghệ thuật, xây dựng thương hiệu và giao tiếp bằng hình ảnh trong thời đại kỹ thuật số, góp phần vào bối cảnh ngày càng phát triển của kiểu chữ và thiết kế sáng tạo.

    `,
  font: [
    {
      label: "Fullwidth",
      slug: "fullwidth",
      previewFont: "times",
      actions: [
        {
          action: "shift_code_point",
          range: [33, 126],
          add: 65248,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "full-width-vaporwave",
      },
    },
    {
      label:
        'Vaporwave (Λ & Ξ replacement)',
      slug: "vaporwave-ae",
      previewFont: "system",
      actions: [
        {
          action: "map_code_point",
          map: {
            65: [923],
            69: [926],
          },
        },
        {
          action: "shift_code_point",
          range: [33, 126],
          add: 65248,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "full-width-vaporwave",
      },
    },
    {
      label:
        'Vaporwave (▲ & ▼ replacement)',
      slug: "vaporwave-av",
      previewFont: "system",
      actions: [
        {
          action: "map_code_point",
          map: {
            65: [9650],
            86: [9660],
          },
        },
        {
          action: "shift_code_point",
          range: [33, 126],
          add: 65248,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "full-width-vaporwave",
      },
    },
    {
      label:
        'Vaporwave (Σ & ♢ replacement)',
      slug: "vaporwave-eo",
      previewFont: "system",
      actions: [
        {
          action: "map_code_point",
          map: {
            69: [931],
            79: [9826],
          },
        },
        {
          action: "shift_code_point",
          range: [33, 126],
          add: 65248,
        },
      ],
      hasPreviewImages: true,
      textStyle: {
        path: "full-width-vaporwave",
      },
    },
  ],
};

export default varpowave;

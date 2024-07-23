const boldItalicSans = {
    nameFont: "Bold and Italics",
    detailOne:
      "Phép thuật văn bản unicode cực hay. Viết thông tin cập nhật về 𝐛𝐨𝐥𝐝 và/hoặc 𝑖𝑡𝑎𝑙𝑖𝑐 trên Facebook, Twitter và các nơi khác.",
    detailTw:
      "Công cụ này tạo văn bản in đậm và in nghiêng bằng cách sử dụng các ký tự unicode (𝐥𝐢𝐤𝐞 𝐭𝐡𝐢𝐬, 𝘁𝗵𝗶𝘀, 𝑡ℎ𝑖𝑠, & 𝘵𝘩𝘪𝘴). Bạn có thể sao chép và dán văn bản này vào email hoặc sử dụng nó trong các cập nhật trạng thái trên Facebook và Twitter, nhận xét trên YouTube, v.v. Chữ in đậm và in nghiêng thường được sử dụng để nhấn mạnh một điểm. Văn bản in đậm cũng có thể được sử dụng để giúp cấu trúc các nội dung văn bản lớn hơn, ví dụ: văn bản in đậm có thể được sử dụng để biểu thị chủ đề, tiêu đề hoặc tiêu đề.",
    detailThree: `Văn bản in đậm và in nghiêng có thể được sử dụng trên mạng xã hội và trên web cho một số mục đích khác nhau.
          
          Những kiểu văn bản này có thể nhấn mạnh thông tin quan trọng, thu hút sự chú ý đến nội dung cụ thể và làm nổi bật các điểm chính hoặc lời kêu gọi hành động. Việc sử dụng trình tạo văn bản in đậm hoặc in nghiêng sẽ nâng cao khả năng đọc, chia nhỏ các đoạn văn dài và có thể thiết lập hệ thống phân cấp trực quan. Những phong cách này cũng góp phần tạo nên bản sắc hình ảnh của thương hiệu, tăng thêm cá tính và tính nhất quán cho sự hiện diện trực tuyến.
    
          Văn bản in đậm và in nghiêng có thể được sử dụng để tạo kiểu cho tên người dùng, tạo các bài đăng hấp dẫn trực quan hoặc trên các nền tảng thiếu chức năng tạo kiểu văn bản gốc. Văn bản được tạo ra từ khối Ký hiệu chữ và số toán học của Unicode, ban đầu được dùng cho ký hiệu toán học.
    
          Mặc dù văn bản in đậm và in nghiêng được tạo ở đây trông giống với văn bản được in đậm hoặc in nghiêng trong trình xử lý văn bản, nhưng nó lại khác. Các ký tự này không được tạo bằng thẻ HTML (như <bold> hoặc <em>), cũng như không được tạo kiểu bằng thuộc tính CSS (như font-weight: đậm hoặc font-style: italic). Nếu bạn sao chép văn bản này, các chữ cái sẽ giữ nguyên kiểu dáng khi dán ở nơi khác. Đây là sự kỳ diệu của Unicode.
    
          Điều quan trọng là sử dụng văn bản in đậm và in nghiêng một cách tiết kiệm để tránh gây choáng ngợp cho người đọc. Ngoài ra, điều quan trọng cần lưu ý là hình thức của văn bản này có thể khác nhau giữa các nền tảng và thiết bị, tùy thuộc vào cách chúng hiển thị Unicode.`,
    font: [
      {
        label: "Bold (serif)",
        slug: "bold",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119743,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119737,
          },
          {
            action: "shift_code_point",
            range: [48, 57],
            add: 120734,
          },
        ],
      },
  
      {
        label: "Italic (serif)",
        slug: "italic",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "map_code_point",
            map: {
              104: [8462],
            },
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119795,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119789,
          },
        ],
      },
      {
        label: "Bold / italic (serif)",
        slug: "bold-italic",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119847,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119841,
          },
        ],
      },
      {
        label: "Bold (sans)",
        slug: "bold-sans",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 120211,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 120205,
          },
          {
            action: "shift_code_point",
            range: [48, 57],
            add: 120764,
          },
        ],
      },
  
      {
        label: "Italic (sans)",
        slug: "italic-sans",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 120263,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 120257,
          },
        ],
      },
  
      {
        label: "Bold / italic (sans)",
        slug: "bold-italic-sans",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 120315,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 120309,
          },
        ],
      },
  
      {
        label: "Alternating Bold",
        slug: "alternating-bold",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119743,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119737,
          },
          {
            action: "shift_code_point",
            range: [48, 57],
            add: 120734,
          },
        ],
      },
  
      {
        label: "Alternating Italic",
        slug: "alternating-italic",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "map_code_point",
            map: {
              104: [8462],
            },
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119795,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119789,
          },
        ],
      },
  
      {
        label: "Bold w/ Alternating Italic",
        slug: "bold-alternating-italic",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119847,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119841,
          },
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 120315,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 120309,
          },
        ],
      },
      {
        label: "Italic Switch Serifs",
        slug: "italic-switch-serifs",
        previewFont: "times",
        actions: [
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "map_code_point",
            map: {
              104: [8462],
            },
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 119795,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 119789,
          },
          {
            action: "normalize",
            type: "NFD",
          },
          {
            action: "shift_code_point",
            range: [65, 90],
            add: 120263,
          },
          {
            action: "shift_code_point",
            range: [97, 122],
            add: 120257,
          },
        ],
      },
    ],
  };
  
  export default boldItalicSans;
import URL from "@/const";

const monospace = {
    nameFont: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚗",
    detailOne:
        "Văn bản unicode cực ngầu. Monospace aka. fixed-width",
    detailTw:
        "Công cụ này tạo văn bản monospace để sửa khoảng cách giữa các kí tự trong văn bản bằng cách sử dụng các ký tự unicode . Bạn có thể sao chép và dán văn bản này vào email hoặc sử dụng nó trong các cập nhật trạng thái trên Facebook và Twitter, nhận xét trên YouTube, v.v...",
    detailThree: `Văn bản 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚗 có thể được sử dụng trên mạng xã hội và trên web cho một số mục đích khác nhau.
          
          Những kiểu văn bản này có thể nhấn mạnh thông tin quan trọng, thu hút sự chú ý đến nội dung cụ thể và làm nổi bật các điểm chính hoặc lời kêu gọi hành động. Việc sử dụng trình tạo văn bản in đậm hoặc in nghiêng sẽ nâng cao khả năng đọc, chia nhỏ các đoạn văn dài và có thể thiết lập hệ thống phân cấp trực quan. Những phong cách này cũng góp phần tạo nên bản sắc hình ảnh của thương hiệu, tăng thêm cá tính và tính nhất quán cho sự hiện diện trực tuyến.
    
          Văn bản 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚗 có thể được sử dụng để tạo kiểu cho tên người dùng, tạo các bài đăng hấp dẫn trực quan hoặc trên các nền tảng thiếu chức năng tạo kiểu văn bản gốc. Văn bản được tạo ra từ khối Ký hiệu chữ và số toán học của Unicode, ban đầu được dùng cho ký hiệu toán học.
    
          Mặc dù văn bản 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚗 được tạo ở đây trông giống với văn bản được in đậm hoặc in nghiêng trong trình xử lý văn bản, nhưng nó lại khác. Các ký tự này không được tạo bằng thẻ HTML (như <bold> hoặc <em>), cũng như không được tạo kiểu bằng thuộc tính CSS (như font-weight: đậm hoặc font-style: italic). Nếu bạn sao chép văn bản này, các chữ cái sẽ giữ nguyên kiểu dáng khi dán ở nơi khác. Đây là sự kỳ diệu của Unicode.
    
          Điều quan trọng là sử dụng văn bản 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚗 một cách tiết kiệm để tránh gây choáng ngợp cho người đọc. Ngoài ra, điều quan trọng cần lưu ý là hình thức của văn bản này có thể khác nhau giữa các nền tảng và thiết bị, tùy thuộc vào cách chúng hiển thị Unicode.`,
    font: [
        {
            "label": "Monospace",
            "slug": "monospace",
            "previewFont": "system",
            "actions": [
                {
                    "action": "normalize",
                    "type": "NFD"
                },
                {
                    "action": "shift_code_point",
                    "range": [65, 90],
                    "add": 120367
                },
                {
                    "action": "shift_code_point",
                    "range": [97, 122],
                    "add": 120361
                },
                {
                    "action": "shift_code_point",
                    "range": [49, 57],
                    "add": 120774
                }
            ],
            "hasPreviewImages": false,
            "textStyle": {
                "path": "monospace"
            },
        },
    ],
    avatar: URL.BASE_URL+"/public/assets/images/monospan/avatar.jpg",
    previewImages: [
        URL.BASE_URL+"/assets/images/monospan/pre1.jpg",
        URL.BASE_URL+"/assets/images/monospan/pre2.jpg",
        URL.BASE_URL+"/assets/images/monospan/pre3.jpg",
    ]
}

export default monospace;
import URL from "@/const";

const script = {
    nameFont: "Cursive Scriptn",
    detailOne:
        "Văn bản unicode cực ngầu. Tạo chữ viết tay trên Facebook, Twitter và hơn thế nữa. Ký tay mỗi dòng Tweet của bạn.",
    detailTw:
        "Công cụ này tạo văn bản như viết tay trang trọng,mềm mại bằng cách sử dụng các ký tự unicode . Bạn có thể sao chép và dán văn bản này vào email hoặc sử dụng nó trong các cập nhật trạng thái trên Facebook và Twitter, nhận xét trên YouTube, v.v... Phông chữ này có thể được dùng để mô phỏng phông chữ viết tay của người hoặc các văn bản trang trọng.",
    detailThree: `Văn bản 𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓢𝓬𝓻𝓲𝓹𝓽𝓷 có thể được sử dụng trên mạng xã hội và trên web cho một số mục đích khác nhau.
          
          Những kiểu văn bản này có thể nhấn mạnh thông tin quan trọng, thu hút sự chú ý đến nội dung cụ thể và làm nổi bật các điểm chính hoặc lời kêu gọi hành động. Việc sử dụng trình tạo văn bản in đậm hoặc in nghiêng sẽ nâng cao khả năng đọc, chia nhỏ các đoạn văn dài và có thể thiết lập hệ thống phân cấp trực quan. Những phong cách này cũng góp phần tạo nên bản sắc hình ảnh của thương hiệu, tăng thêm cá tính và tính nhất quán cho sự hiện diện trực tuyến.
    
          Văn bản 𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓢𝓬𝓻𝓲𝓹𝓽𝓷 có thể được sử dụng để tạo kiểu cho tên người dùng, tạo các bài đăng hấp dẫn trực quan hoặc trên các nền tảng thiếu chức năng tạo kiểu văn bản gốc. Văn bản được tạo ra từ khối Ký hiệu chữ và số toán học của Unicode, ban đầu được dùng cho ký hiệu toán học.
    
          Mặc dù văn bản 𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓢𝓬𝓻𝓲𝓹𝓽𝓷 được tạo ở đây trông giống với văn bản được in đậm hoặc in nghiêng trong trình xử lý văn bản, nhưng nó lại khác. Các ký tự này không được tạo bằng thẻ HTML (như <bold> hoặc <em>), cũng như không được tạo kiểu bằng thuộc tính CSS (như font-weight: đậm hoặc font-style: italic). Nếu bạn sao chép văn bản này, các chữ cái sẽ giữ nguyên kiểu dáng khi dán ở nơi khác. Đây là sự kỳ diệu của Unicode.
    
          Điều quan trọng là sử dụng văn bản 𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓢𝓬𝓻𝓲𝓹𝓽𝓷 một cách tiết kiệm để tránh gây choáng ngợp cho người đọc. Ngoài ra, điều quan trọng cần lưu ý là hình thức của văn bản này có thể khác nhau giữa các nền tảng và thiết bị, tùy thuộc vào cách chúng hiển thị Unicode.`,
    font: [
        {
            "label": "Cursive script",
            "slug": "script",
            "previewFont": "times",
            "actions": [
                {
                    "action": "normalize",
                    "type": "NFD"
                },
                {
                    "action": "map_code_point",
                    "map": "cu"
                },
                {
                    "action": "shift_code_point",
                    "range": [65, 90],
                    "add": 119899
                },
                {
                    "action": "shift_code_point",
                    "range": [97, 122],
                    "add": 119893
                }
            ],
            "hasPreviewImages": true,
            "textStyle": {
                "path": "script"
            },
            "previewImages": []
        },
        {
            "label": "Cursive script w/ alternating bold",
            "slug": "alt-cursive",
            "previewFont": "times",
            "actions": [
                {
                    "actions": [
                        [
                            {
                                "action": "normalize",
                                "type": "NFD"
                            },
                            {
                                "action": "map_code_point",
                                "map": "cu"
                            },
                            {
                                "action": "shift_code_point",
                                "range": [
                                    65,
                                    90
                                ],
                                "add": 119899
                            },
                            {
                                "action": "shift_code_point",
                                "range": [
                                    97,
                                    122
                                ],
                                "add": 119893
                            }
                        ],
                        [
                            {
                                "action": "normalize",
                                "type": "NFD"
                            },
                            {
                                "action": "shift_code_point",
                                "range": [
                                    65,
                                    90
                                ],
                                "add": 119951
                            },
                            {
                                "action": "shift_code_point",
                                "range": [
                                    97,
                                    122
                                ],
                                "add": 119945
                            }
                        ]
                    ],
                    "action": "cycle"
                }
            ],
            "hasPreviewImages": false,
            "textStyle": {
                "path": "script"
            },
            "previewImages": []
        },
        {
            "label": "Bold cursive script",
            "slug": "bold-script",
            "previewFont": "times",
            "actions": [
                {
                    "action": "normalize",
                    "type": "NFD"
                },
                {
                    "action": "shift_code_point",
                    "range": [65, 90],
                    "add": 119951
                },
                {
                    "action": "shift_code_point",
                    "range": [97, 122],
                    "add": 119945
                }
            ],
            "hasPreviewImages": true,
            "textStyle": {
                "path": "script"
            },
            "previewImages": []
        }
    ],
    avatar: URL.BASE_URL + "/public/assets/images/script/avatar.jpg",
    previewImages: [
        URL.BASE_URL + "/assets/images/script/pre1.jpg",
        URL.BASE_URL + "/assets/images/script/pre2.jpg",
        URL.BASE_URL + "/assets/images/script/pre3.jpg",
    ]
}

export default script;
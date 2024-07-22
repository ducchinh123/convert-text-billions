const sansSerif = {
    nameFont: "Sans serif ",
    detailOne:
      "Phép thuật văn bản unicode cực hay. Văn bản sans-serif không có các đường hoặc nét trang trí nhỏ, được gọi là serif, ở cuối ký tự. Ngay cả khi nền tảng bạn đang đăng đã sử dụng phông chữ sans-serif, trình tạo văn bản này có thể tạo văn bản giúp văn bản của bạn nổi bật mà không trông quá khác so với văn bản mặc định.",
    detailTw: "",
    detailThree: `
Phông chữ Sans-serif có vẻ ngoài gọn gàng, hiện đại và tối giản với các nét thẳng và đồng đều, khiến chúng trở nên phổ biến trên các nền tảng kỹ thuật số, bảng hiệu và thiết kế hiện đại. Chúng thường được coi là dễ đọc hơn và dễ đọc hơn trên màn hình, đặc biệt ở kích thước nhỏ hơn hoặc trong môi trường có độ phân giải thấp.
    `,
    font: [
        {
            "label": "Sans Serif",
            "slug": "sans-serif",
            "previewFont": "times",
            "actions": [
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
                    "add": 120159
                },
                {
                    "action": "shift_code_point",
                    "range": [
                        97,
                        122
                    ],
                    "add": 120153
                },
                {
                    "action": "shift_code_point",
                    "range": [
                        48,
                        57
                    ],
                    "add": 120754
                }
            ]
        }
    ],
  };
  
  export default sansSerif;
  
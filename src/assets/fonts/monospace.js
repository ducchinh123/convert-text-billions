const monospace = {
    nameFont: "Monospace",
    detailOne: "Phép thuật văn bản unicode cực hay. Không gian đơn hay còn gọi là. chiều rộng cố định",
    detailTw: "Sử dụng công cụ monospace này để tạo văn bản có chiều rộng cố định có thể được sao chép vào Facebook, Twitter, SMS, v.v. Phông chữ monospace có thể bắt chước máy đánh chữ hoặc thiết bị đầu cuối máy tính. Chúng rất hữu ích khi hiển thị dữ liệu dạng bảng (như trong bảng tính) và bạn muốn các cột thẳng hàng.",
    detailThree: `
Bạn có thể sử dụng trình tạo văn bản máy đánh chữ đơn cách này để giúp văn bản của bạn duy trì khoảng cách nhất quán. Điều này hữu ích nếu bạn đăng bài về mã hoặc dữ liệu dạng bảng, nhưng dấu cách đơn cũng có những cách sử dụng sáng tạo. Nếu bạn đang tạo tác phẩm nghệ thuật ASCII và muốn tất cả các chữ cái của mình được sắp xếp đẹp mắt, bạn cũng có thể dán văn bản do công cụ này tạo ra. Văn bản này cũng có thể tạo ra cảm giác như máy đánh chữ cổ điển hoặc cảm giác về thiết bị đầu cuối máy tính kiểu cũ, nếu bạn đang viết văn bản phù hợp với phong cách hoài cổ. Những ký tự này có thể dễ dàng sao chép và dán ở bất cứ đâu trên web vì sử dụng ký tự Unicode.
    `,
    font: [
        {
            label: "Monospace",
            slug: "monospace",
            previewFont: "system",
            actions: [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 120367,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 120361,
              },
              {
                action: "shift_code_point",
                range: [49, 57],
                add: 120774,
              },
            ],
            hasPreviewImages: false,
            textStyle: {
              path: "monospace",
            },
          }
    ],
  };
  
  export default monospace;
  
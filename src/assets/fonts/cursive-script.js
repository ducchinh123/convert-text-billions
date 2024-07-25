import URL from "@/const";

const cursiveScript = {
  nameFont: "Cursive Script",
  detailOne:
    "Phép thuật văn bản unicode cực hay. 𝓛𝓸𝓿𝓮𝓵𝔂 văn bản chữ thảo trôi chảy cho Facebook, Twitter, v.v. Ký tweet của bạn trong kịch bản. 𝒮𝒾𝓃𝒸ℯ𝓇ℯ𝓁𝓎 𝓎ℴ𝓊𝓇𝓈, YayText ❤️",
  detailTw: `
      Công cụ này tạo văn bản chữ viết trang trọng, trôi chảy (𝓁𝒾𝓀ℯ 𝓉𝒽𝒾𝓈) có thể được sao chép/dán vào thông báo trạng thái trên Facebook, cập nhật Twitter, bình luận trên YouTube, v.v. Văn bản kiểu tập lệnh này có thể được sử dụng để tái tạo tính nhân văn của văn bản viết tay hoặc để bắt chước thư pháp trang trọng.
    `,
  detailThree: `
    
    Văn bản chữ thảo, còn được gọi là chữ viết hoặc chữ viết tay, có lịch sử lâu đời và phong phú bắt nguồn từ thời cổ đại. Một số ví dụ ban đầu về chữ viết thảo bao gồm chữ thảo La Mã và chữ viết nhỏ kiểu Carolingian. Qua nhiều năm, chữ thảo đã tỏ ra hữu ích trong cuộc sống hàng ngày, bằng cách cho phép mọi người viết tay nhanh hơn và hiệu quả hơn.

    Trong thời hiện đại, mặc dù sự phổ biến của giao tiếp kỹ thuật số và đánh máy đã làm giảm nhu cầu viết chữ thảo, nhưng việc sử dụng phông chữ thảo vẫn tồn tại. Phông chữ chữ thảo có thể gợi lên cảm giác sang trọng, tinh tế và hoài cổ. Chúng thường được sử dụng trong các thiệp mời trang trọng, thông báo đám cưới và các thiết kế khác nhằm truyền tải nét thẩm mỹ cổ điển hoặc tinh tế.

    Ngoài ra, phông chữ thảo có thể mang đậm dấu ấn cá nhân và truyền tải cảm giác cá tính, đặc biệt khi được sử dụng cho thương hiệu cá nhân hoặc nỗ lực sáng tạo. Mặc dù văn bản chữ thảo ít được sử dụng phổ biến hơn trong giao tiếp kỹ thuật số hàng ngày nhưng vẫn có thể kết hợp nó trên các nền tảng truyền thông xã hội. Bạn có thể sử dụng phông chữ thảo trên Twitter, Facebook, TikTok, Instagram và các nền tảng truyền thông xã hội khác bằng trình tạo văn bản của chúng tôi.

    Về cơ bản, trình tạo văn bản chữ thảo của chúng tôi sử dụng các ký tự Unicode giống với chữ viết thảo. Bằng cách áp dụng văn bản chữ thảo một cách tiết kiệm và có mục đích, bạn có thể thêm nét tinh tế đặc biệt cho các bài đăng, chú thích hoặc tiểu sử hồ sơ trên mạng xã hội, cho phép nội dung bằng văn bản của bạn nổi bật theo cách độc đáo, trang nhã và hấp dẫn về mặt hình ảnh.

    `,
  font: [
    {
      label: "Cursive script",
      slug: "script",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "map_code_point",
          map: "cu",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 119899,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119893,
        },
      ],
    },

    {
      label: "Cursive script w/ alternating bold",
      slug: "alt-cursive",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 119951,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119945,
        },
      ],
    },
    {
      label: "Bold cursive script",
      slug: "bold-script",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 119951,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119945,
        },
      ],
    },
  ],
 avatar: URL.BASE_URL + "/public/assets/images/script/avatar.jpg",
  previewImages: [
      URL.BASE_URL + "/assets/images/script/pre1.jpg",
      URL.BASE_URL + "/assets/images/script/pre2.jpg",
      URL.BASE_URL + "/assets/images/script/pre3.jpg",
  ]
};

export default cursiveScript;

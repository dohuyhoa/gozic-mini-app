let textVie = {};

textVie = {

    bottom_navigation: {
        home_btn: "Trang chủ",
        user_btn: "Tài khoản"
    },

    // serviceList: {
    //     service01: "Thêm hợp đồng bảo hiểm",
    //     service02: "Thông tin các hợp đồng bảo hiểm",
    //     service03: "Danh sách thẻ bảo hiểm",
    //     service04: "Truy vấn tình trạng hồ sơ",
    //     service05: "Xem lịch sử bồi thường",
    //     service06: "Tìm kiếm mạng lưới bảo lãnh bảo hiểm"
    // },

    // Page Register
    register: {
        heading: "Đăng ký user mới",

        input_01_placeholder: "Tên",
        input_02_placeholder: "Email",
        input_03_placeholder: "ID ZALO",

        submit_btn: "Đăng ký"
    },

    // Page User Information

    // Page User Update Information


    // Page Home
    home: {
        heading: "Chào mừng đến với Insmart !",

        service01: "Thêm hợp đồng bảo hiểm",
        service02: "Thông tin các hợp đồng bảo hiểm",
        service03: "Danh sách thẻ bảo hiểm",
        service04: "Truy vấn tình trạng hồ sơ",
        service05: "Xem lịch sử bồi thường",
        service06: "Tìm kiếm mạng lưới bảo lãnh bảo hiểm"
    },

    // Page Add New Contract
    add_contract: {
        input01: {
            placeholder: "Nhà bảo hiểm"
        },
        input02: {
            label: "Tên người thụ hưởng",
            placeholder: "Nhập đầy đủ họ và tên"
        },
        input03: {
            label: "Ngày sinh"
        },
        input04: {
            label: "Số hợp đồng bảo hiểm",
            placeholder: "Ví dụ: 885334654xx"
        },
        input05: {
            label: "CMND/CCCD",
            placeholder: "Nhập số CMND hoặc CCCD của bạn",
            hint: "Số điện thoại đăng ký với công ty bảo hiểm để nhận mã OTP"
        },
        submit_btn: "Thêm hợp đồng",
        success_msg: "Thêm hợp đồng thành công !"
    },

    // Page Confirm OTP Code
    confirm_otp: {
        title: "Xác thực OTP",

        instruction_prefix: "Mã OTP đã được gửi về số điện thoại",
        instruction_suffix: "của quý khách. Vui lòng nhập và xác nhận mã OTP để tiếp tục.",

        noti_time: "Gửi lại mã",

        resend_btn: "Gửi lại mã OTP",
        submit_btn: "Xác nhận",

        error_msg: "Mã OTP không chính xác !"
    },

    // Page All Contract Info
    contracts: {
        title: "Thông tin các hợp đồng bảo hiểm",
        add_btn: "Thêm hợp đồng bảo hiểm mới"
    },
    contract_item:{
        item_info: "Thông tin hợp đồng bảo hiểm",
        item_benifit: "Quyền lợi"

    },
    contract_modal: {
        heading: "Xóa hợp đồng",
        submit_btn: "Xóa hợp đồng",
        cancel_btn: "Hủy"
    },
    form_detail: {
        detail_01: "Số hợp đồng bảo hiểm",
        detail_02: "CMND/CCCD",
        detail_03: "Số điện thoại"
    },
    form_benefit: {
        benefit_01: "Đơn vị tiền tệ",
        benefit_02: "Quyền lợi chính",
        benefit_03: "Tổng hạn mức/ năm",
        benefit_04: "Số tiền bồi thường đã thanh toán",
        benefit_05: "Số tiền đã yêu cầu bồi thường",
        benefit_06: "Số tiền còn lại"
    },

    // Page Card Information
    card_info: {
        title: "Danh sách thẻ bảo hiểm",
        input_01: "Chọn hợp đồng bảo hiểm",
        input_01_placeholder: "Chọn hợp đồng bảo hiểm"
    },

    // Page Search Contract Claim
    search_contract: {
        input_01: "Truy vấn tình trạng hồ sơ",
        input_01_placeholer: "Nhập số hồ sơ bạn cần truy vấn"
    },

    // Page Search Contract Claim Result
    contract_status: {
        title: "Truy vấn tình trạng hồ sơ",
        heading_prefix: "Thông tin hợp đồng ",

        item_01: "Trạng thái",
        item_01_status:{
            solved: "Đã xử lý",
            pending: "Đang chờ",
            rejected: "Đã từ chối"
        },


        item_02: "Người được bảo hiểm",
        item_03: "Loại hình bồi thường",
        item_04: "Hình thức",
        item_05: "Ngày nhập viện",
        item_06: "Cơ sở y tế",
        item_07: "Chẩn đoán:",
        item_08: "Số tiền Y/c bồi thường (VNĐ)",
        item_09: "Số tiền chi trả bồi thường (VNĐ)",
        item_10: "Người thụ hưởng",
        item_11: "Hình thức nhận tiền",
        item_12: "Ngày yêu cầu bổ sung chứng từ",
        item_13: "Nội dung yêu cầu bổ sung",

        error_msg: "Không tìm thấy thông tin !"
    },

    // Page Search History
    history: {
        title: "Xem lịch sử bồi thường",

        input_01: "Chọn hợp đồng Bảo hiểm",
        input_01_placeholder: "Chọn hợp đồng bảo hiểm",

        input_02: "Chọn thời gian",
        input_02_label_01: "Ngày bắt đầu",
        input_02_label_02: "Ngày kết thúc",

        input_03: "Trạng thái hồ sơ",
        input_03_placeholder: "Trạng thái",

        submit_btn: "Xem"
    },
    history_result: {
        item_01: "Số hồ sơ:",
        item_02: "Loại hình bồi thường:",
        item_03: "Hình thức:",
        item_04: "Ngày nhập viện:",
        item_05: "Ngày xuất viện:",
        item_06: "Cơ sở y tế:",
        item_07: "Chuẩn đoán ICD:",
        item_08: "Số tiền yêu cầu bồi thường (VNĐ):",
        item_09: "Số tiền chi trả bồi thường (VNĐ):"
    },

    // Page Search Network
    insurance_network: {
        title: "Tìm kiếm mạng lưới bảo hiểm",

        input_01: "Người được bảo hiểm",
        input_01_placeholder: "Chọn người được bảo hiểm",

        input_02: "Loại quyền lợi",
        input_02_placeholder: "Loại quyền lợi",
        input_02_option_01: "Nội trú",
        input_02_option_02: "Ngoại trú",

        input_03: "Địa phương",

        submit_btn: "Xem"
    },

}

export default textVie;
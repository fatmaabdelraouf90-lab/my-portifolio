// تفعيل التفاعل مع الأزرار أو الروابط عند الحاجة
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Fatma Abdelraouf's Portfolio!");
    
    // مثال لتأثير بسيط عند الضغط على روابط التنقل
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // يمكن إضافة أي تفاعل برمجي هنا مستقبلاً
        });
    });
});
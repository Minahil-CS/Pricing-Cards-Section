document.addEventListener('DOMContentLoaded', () => {
    const billingSwitch = document.getElementById('billingSwitch');
    const amounts = document.querySelectorAll('.amount');
    const planButtons = document.querySelectorAll('.plan-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // 1. Toggle Monthly / Annual Pricing
    billingSwitch.addEventListener('change', () => {
        const isAnnual = billingSwitch.checked;

        amounts.forEach(amount => {
            const monthlyPrice = amount.getAttribute('data-monthly');
            const annualPrice = amount.getAttribute('data-annual');

            // Fade out transition effect
            amount.style.opacity = '0';
            amount.style.transform = 'translateY(-5px)';

            setTimeout(() => {
                amount.textContent = isAnnual ? annualPrice : monthlyPrice;
                amount.style.opacity = '1';
                amount.style.transform = 'translateY(0)';
            }, 180);
        });
    });

    // 2. Interactive Button Action & Toast Display
    planButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planName = button.getAttribute('data-plan');
            const period = billingSwitch.checked ? 'Annual' : 'Monthly';

            // Show Toast Notification
            toastMessage.textContent = `Selected the ${planName} Plan (${period} Billing)!`;
            toast.classList.add('show');

            // Hide Toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    });
});s
import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) alert(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده ار امکانات دییوار، شماره موبایل خورد را وارد کنید. کد تایید
        به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید.</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(event) => setMobile(event.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;

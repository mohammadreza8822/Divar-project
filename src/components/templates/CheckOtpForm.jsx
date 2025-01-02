import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "../../services/user";

function CheckOtpForm({ code, setStep, setCode, mobile }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch( )
    }
    if (error) alert(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد نمایید.</span>
      <label htmlFor="input">کد تایید را وارد نمایید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <button type="submit">ورود</button>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;

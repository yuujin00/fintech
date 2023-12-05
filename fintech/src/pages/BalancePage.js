import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import AppHeader from '../components/common/AppHeader';
import BalanceCard from '../components/balance/BalanceCard';
import TransactionList from '../components/balance/TransactionList';

function BalancePage() {
    let userSeqNo = "";
    let accessToken = "";

    const [balance, setBalance] = useState("아직없음");
    const [transactionList, setTransactionList] = useState([]);
    const queryParams = useLocation().search;
    const parsed = queryString.parse(queryParams);
    const fintechUseNum = parsed.fintechUseNo;
    
    function generateRandom9DigitNumber() {
        const min = 100000000; // Minimum value (smallest 9-digit number)
        const max = 999999999; // Maximum value (largest 9-digit number)
    
        const random9DigitNumber =
          Math.floor(Math.random() * (max - min + 1)) + min;
        return random9DigitNumber.toString();
    }
    
    const genTransId = () => {
        return "M202300440U" + generateRandom9DigitNumber();
    };
    
    useEffect(() => {
        console.log(localStorage.getItem("accessToken"));
        console.log(localStorage.getItem("userSeqNo"));
        console.log(fintechUseNum);
        console.log(genTransId());
        accessToken = localStorage.getItem("accessToken");
        userSeqNo = localStorage.getItem("userSeqNo");
        getBalance();
        getTransactionList();
    }, []);

    const getBalance = () => {
        const sendObj = {
            bank_tran_id: genTransId(),
            fintech_use_num: fintechUseNum,
            tran_dtime: "20230802153534",
          };
      
          const option = {
            method: "GET",
            url: "v2.0/account/balance/fin_num",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              Authorization: `Bearer ${accessToken}`,
            },
            params: sendObj,
          };
      
          axios(option).then(({ data }) => {
            setBalance(data);
          });
    };

    const getTransactionList = () => {
        const requestOption= {
          bank_tran_id: genTransId(),
          fintech_use_num: fintechUseNum,
          inquiry_type: "A",
          inquiry_base: "D",
          from_date: "20230701",
          to_date: "20230702",
          sort_order: "D",
          tran_dtime: "20230803100000",
        };
        const option = {
          method: "GET",
          url: "v2.0/account/transaction_list/fin_num",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
          params: requestOption,
        };
    
        axios(option).then(({ data }) => {
            setTransactionList(data.res_list);
        });
      };

    return (
        <div>
            <AppHeader title={"잔액조회"}/>
            <BalanceCard
                bankName={balance.bank_name}
                fintechNo={balance.fintech_use_num}
                balance={balance.balance_amt}
            ></BalanceCard>
            <TransactionList transactionList={transactionList}></TransactionList>
        </div>
    )
}

export default BalancePage;
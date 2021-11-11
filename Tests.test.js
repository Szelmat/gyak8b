import { ATM } from "./ATM";
import { APIHandler } from "./ApiHandler";

describe("test ATM class", () => {
  describe("test for the withdraw method of the ATM class", () => {
    let myATM;
    beforeEach(() => {
      myATM = new ATM(3000);
    });

    test("myATM class is created correcly", () => {
      expect(myATM).toBeInstanceOf(ATM);
    });

    test("balace value is correct", () => {
      expect(myATM.getBalance()).toBe(3000);
    });

    test("withdraw works correctly", () => {
      myATM.withdraw(500);
      expect(myATM.getBalance()).toBe(2500);

      myATM.withdraw(200);
      expect(myATM.getBalance()).toBe(2300);
    });
  });

  describe("test for the bills", () => {
    let myATM;
    beforeEach(() => {
      myATM = new ATM(3000);
    });

    test("payBills() works correctly", () => {
      myATM.payBills();
      expect(myATM.getBalance()).toBe(2850);

      myATM.payBills();
      expect(myATM.getBalance()).toBe(2700);
    });
  });

  describe("test for the payments", () => {
    let myATM;
    beforeEach(() => {
      myATM = new ATM(3000);
    });

    test("receivePayment() works correctly", () => {
      myATM.receivePayment();
      myATM.receivePayment();
      expect(myATM.getBalance()).toBe(4000);
      myATM.receivePayment();
      expect(myATM.getBalance()).toBe(4500);
    });
  });

  describe("test the API class", () => {
    let myAPIHandler;
    beforeEach(() => {
      myAPIHandler = new APIHandler();
    });

    test("get all the universities in Hungary", () => {
      myAPIHandler.getUniversities("Hungary").then((result) => {
        expect(result).not.toBe(null);
        let uniDeb = {
          domains: ["agr.unideb.hu"],
          name: "Debrecen University of Agricultural Sciences",
          country: "Hungary",
          alpha_two_code: "HU",
          "state-province": null,
          web_pages: ["http://www.agr.unideb.hu/"],
        };

        expect(result).arrayContaining(uniDeb);
      });
    });
  });
});

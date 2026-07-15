// Sources:
// Deutsche Bundesbank, Basiszinssatz nach § 247 BGB.
// https://www.bundesbank.de/de/bundesbank/organisation/agb-und-regelungen/basiszinssatz-607820
export const baseInterestRateSourceUrl =
  'https://www.bundesbank.de/de/bundesbank/organisation/agb-und-regelungen/basiszinssatz-607820';

const baseInterestRatePeriods = [
  { validFrom: '2002-01-01', validTo: '2002-06-30', baseRate: 2.57, businessSurcharge: 8 },
  { validFrom: '2002-07-01', validTo: '2002-12-31', baseRate: 2.47, businessSurcharge: 8 },
  { validFrom: '2003-01-01', validTo: '2003-06-30', baseRate: 1.97, businessSurcharge: 8 },
  { validFrom: '2003-07-01', validTo: '2003-12-31', baseRate: 1.22, businessSurcharge: 8 },
  { validFrom: '2004-01-01', validTo: '2004-06-30', baseRate: 1.14, businessSurcharge: 8 },
  { validFrom: '2004-07-01', validTo: '2004-12-31', baseRate: 1.13, businessSurcharge: 8 },
  { validFrom: '2005-01-01', validTo: '2005-06-30', baseRate: 1.21, businessSurcharge: 8 },
  { validFrom: '2005-07-01', validTo: '2005-12-31', baseRate: 1.17, businessSurcharge: 8 },
  { validFrom: '2006-01-01', validTo: '2006-06-30', baseRate: 1.37, businessSurcharge: 8 },
  { validFrom: '2006-07-01', validTo: '2006-12-31', baseRate: 1.95, businessSurcharge: 8 },
  { validFrom: '2007-01-01', validTo: '2007-06-30', baseRate: 2.70, businessSurcharge: 8 },
  { validFrom: '2007-07-01', validTo: '2007-12-31', baseRate: 3.19, businessSurcharge: 8 },
  { validFrom: '2008-01-01', validTo: '2008-06-30', baseRate: 3.32, businessSurcharge: 8 },
  { validFrom: '2008-07-01', validTo: '2008-12-31', baseRate: 3.19, businessSurcharge: 8 },
  { validFrom: '2009-01-01', validTo: '2009-06-30', baseRate: 1.62, businessSurcharge: 8 },
  { validFrom: '2009-07-01', validTo: '2009-12-31', baseRate: 0.12, businessSurcharge: 8 },
  { validFrom: '2010-01-01', validTo: '2010-06-30', baseRate: 0.12, businessSurcharge: 8 },
  { validFrom: '2010-07-01', validTo: '2010-12-31', baseRate: 0.12, businessSurcharge: 8 },
  { validFrom: '2011-01-01', validTo: '2011-06-30', baseRate: 0.12, businessSurcharge: 8 },
  { validFrom: '2011-07-01', validTo: '2011-12-31', baseRate: 0.37, businessSurcharge: 8 },
  { validFrom: '2012-01-01', validTo: '2012-06-30', baseRate: 0.12, businessSurcharge: 8 },
  { validFrom: '2012-07-01', validTo: '2012-12-31', baseRate: 0.12, businessSurcharge: 8 },
  { validFrom: '2013-01-01', validTo: '2013-06-30', baseRate: -0.13, businessSurcharge: 8 },
  { validFrom: '2013-07-01', validTo: '2013-12-31', baseRate: -0.38, businessSurcharge: 8 },
  { validFrom: '2014-01-01', validTo: '2014-06-30', baseRate: -0.63, businessSurcharge: 8 },
  { validFrom: '2014-07-01', validTo: '2014-07-28', baseRate: -0.73, businessSurcharge: 8 },
  { validFrom: '2014-07-29', validTo: '2014-12-31', baseRate: -0.73, businessSurcharge: 9 },
  { validFrom: '2015-01-01', validTo: '2015-06-30', baseRate: -0.83, businessSurcharge: 9 },
  { validFrom: '2015-07-01', validTo: '2015-12-31', baseRate: -0.83, businessSurcharge: 9 },
  { validFrom: '2016-01-01', validTo: '2016-06-30', baseRate: -0.83, businessSurcharge: 9 },
  { validFrom: '2016-07-01', validTo: '2016-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2017-01-01', validTo: '2017-06-30', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2017-07-01', validTo: '2017-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2018-01-01', validTo: '2018-06-30', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2018-07-01', validTo: '2018-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2019-01-01', validTo: '2019-06-30', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2019-07-01', validTo: '2019-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2020-01-01', validTo: '2020-06-30', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2020-07-01', validTo: '2020-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2021-01-01', validTo: '2021-06-30', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2021-07-01', validTo: '2021-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2022-01-01', validTo: '2022-06-30', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2022-07-01', validTo: '2022-12-31', baseRate: -0.88, businessSurcharge: 9 },
  { validFrom: '2023-01-01', validTo: '2023-06-30', baseRate: 1.62, businessSurcharge: 9 },
  { validFrom: '2023-07-01', validTo: '2023-12-31', baseRate: 3.12, businessSurcharge: 9 },
  { validFrom: '2024-01-01', validTo: '2024-06-30', baseRate: 3.62, businessSurcharge: 9 },
  { validFrom: '2024-07-01', validTo: '2024-12-31', baseRate: 3.37, businessSurcharge: 9 },
  { validFrom: '2025-01-01', validTo: '2025-06-30', baseRate: 2.27, businessSurcharge: 9 },
  { validFrom: '2025-07-01', validTo: '2025-12-31', baseRate: 1.27, businessSurcharge: 9 },
  { validFrom: '2026-01-01', validTo: '2026-06-30', baseRate: 1.27, businessSurcharge: 9 },
  { validFrom: '2026-07-01', validTo: '2026-12-31', baseRate: 1.52, businessSurcharge: 9 },
];

export const baseInterestRates = baseInterestRatePeriods.map((period) => ({
  validFrom: period.validFrom,
  validTo: period.validTo,
  baseRate: period.baseRate,
  consumerDefaultRate: period.baseRate + 5,
  businessDefaultRate: period.baseRate + period.businessSurcharge,
}));

export const currentBaseInterestRate = baseInterestRates.at(-1).baseRate;

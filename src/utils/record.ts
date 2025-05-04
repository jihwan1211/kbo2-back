export const addIp = (ip1: string, ip2: string) => {
  const ip1Array = ip1.split(' ');
  const ip2Array = ip2.split(' ');

  let ip1Inning = 0;
  let ip1Remain = 0;
  if (ip1Array.length >= 2) {
    ip1Remain += Number(ip1Array[1].split('/')[0]);
  } else {
    if (ip1Array[0].includes('/')) {
      ip1Remain += Number(ip1Array[0].split('/')[0]);
    } else {
      ip1Inning += Number(ip1Array[0]);
    }
  }

  let ip2Inning = 0;
  let ip2Remain = 0;
  if (ip2Array.length >= 2) {
    ip2Remain += Number(ip2Array[1].split('/')[0]);
  } else {
    if (ip2Array[0].includes('/')) {
      ip2Remain += Number(ip2Array[0].split('/')[0]);
    } else {
      ip2Inning += Number(ip2Array[0]);
    }
  }

  const totalInning = ip1Inning + ip2Inning + (ip1Remain + ip2Remain) / 3;
  const totalRemain = (ip1Remain + ip2Remain) % 3;

  return `${totalInning} ${totalRemain}/3`;
};

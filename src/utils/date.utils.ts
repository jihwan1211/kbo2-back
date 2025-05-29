/**
 * 한국 시간(KST)을 UTC로 변환하는 유틸리티 함수들
 */

/**
 * 한국 시간(KST)을 UTC로 변환
 * @param date Date 객체 또는 ISO 문자열
 * @returns UTC Date 객체
 */
export function convertKSTtoUTC(date: Date | string): Date {
  const koreaDate = new Date(date);

  // getTime()은 UTC 밀리초를 반환하므로,
  // 한국 시간대(UTC+9)를 고려하여 9시간을 뺌
  const utcDate = new Date(koreaDate.getTime() - 9 * 60 * 60 * 1000);

  return utcDate;
}

/**
 * UTC를 한국 시간(KST)으로 변환
 * @param date Date 객체 또는 ISO 문자열
 * @returns KST Date 객체
 */
export function convertUTCtoKST(date: Date | string): Date {
  const utcDate = new Date(date);

  // UTC에 9시간을 더해서 한국 시간으로 변환
  const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  return kstDate;
}

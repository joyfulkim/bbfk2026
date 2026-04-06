/* ============================================
   app.js - BBFK26 전국목회자 친교회
   Main Application Logic
   ============================================ */

'use strict';

/* ==================================
   DATA
   ================================== */

const DATA = {

  /* 공지사항 */
  notices: [
    {
      id: 1, tag: 'important', tagLabel: '중요',
      title: '행사 참가 최종 확인 안내',
      date: '2026-04-10',
      preview: '4월 20일 행사 참가자 최종 명단을 확인해 주시기 바랍니다.',
      body: `행사 참가자 여러분께 공지드립니다.

4월 15일(수)까지 참가 확정 여부를 담당자에게 최종 통보해 주시기 바랍니다.

• 연락처: 담당 간사 010-0000-0000
• 카카오톡 오픈채팅 참여 필수
• 숙소 배정은 4월 17일 발표 예정

함께 은혜로운 시간 갖기를 기대합니다.`
    },
    {
      id: 2, tag: 'info', tagLabel: '안내',
      title: '경주 성호리조트 도착 안내 및 주차 정보',
      date: '2026-04-12',
      preview: '행사장 도착 방법 및 주차 안내입니다. 대중교통 이용을 권장합니다.',
      body: `경주 성호리조트 도착 안내입니다.

🚗 자가용 이용 시
- 내비게이션: '경주 성호리조트' 검색
- 주차: 리조트 내 무료 주차장 이용 가능
- 경부고속도로 → 경주IC → 감포 방향 → 20분

🚌 대중교통 이용 시  
- KTX 신경주역 하차 → 리조트 픽업 버스 (사전 신청 필수)
- 픽업 시간: 4월 20일 오전 10시, 낮 12시, 오후 2시

📞 픽업 버스 신청: 010-0000-0000

※ 주차 공간이 제한되어 있으니 가능한 카풀/대중교통을 이용해 주세요.`
    },
    {
      id: 3, tag: 'update', tagLabel: '업데이트',
      title: '집회 순서 및 찬양팀 안내',
      date: '2026-04-14',
      preview: '집회 찬양팀 구성과 집회 순서가 확정되었습니다.',
      body: `집회 순서 및 찬양팀 안내입니다.

🎵 찬양팀
- 인도: 찬양 인도자 (서울 성서침례교회)
- 피아노, 기타, 드럼 반주

📖 말씀 사역자
- 1차 집회: 담임목사 (성서침례교회)
- 2차 집회: 초청 강사
- 3차 집회 (마지막): 전체 나눔 및 기도회

🙏 기도회
- 매일 오전 6:30 새벽기도회 (선택 참여)
- 저녁 집회 후 중보기도 모임

집회 준비를 위해 기도로 함께해 주세요.`
    },
    {
      id: 4, tag: 'info', tagLabel: '안내',
      title: '준비물 및 복장 안내',
      date: '2026-04-15',
      preview: '행사 참가 시 필요한 준비물과 복장 안내입니다.',
      body: `행사 참가 준비물 및 복장 안내입니다.

👔 복장
- 집회: 단정한 복장 (정장 또는 캐주얼)
- 야외 활동: 편안한 운동복 가능
- 수영장/스파: 수영복 지참 (리조트 시설 이용 가능)

📦 준비물
• 성경책 (필수)
• 필기도구
• 개인 세면도구 (리조트 기본 제공)
• 상비약
• 편안한 실내화

🌡️ 날씨
- 4월 경주 평균기온: 낮 18~20°C, 밤 8~10°C
- 일교차가 크므로 겉옷 필히 준비

즐겁고 은혜로운 친교회가 되길 바랍니다! 🙏`
    },
    {
      id: 5, tag: 'important', tagLabel: '중요',
      title: '숙소 배정 결과 발표',
      date: '2026-04-17',
      preview: '숙소 배정 결과가 발표되었습니다. 앱 내 숙소 탭에서 확인하세요.',
      body: `숙소 배정 결과를 안내드립니다.

숙소배치도는 본 앱의 '숙소 배치' 메뉴에서 확인하실 수 있습니다.

• A동 (201~206호): 담임목사님 및 부부 참가자
• B동 (301~308호): 지역별 혼합 배정
• C동 (401~410호): 청년/독신 목회자

체크인: 4월 20일 오후 2시부터
체크아웃: 4월 22일 오전 11시까지

룸키는 안내 데스크에서 배부합니다.
⚠️ 본인 배정 룸 이외 객실 방문을 삼가주세요.`
    }
  ],

  /* 타임테이블 */
  timetable: [
    /* Day 1: 4월 20일 (월) */
    [
      { time: '10:00\n~', title: '리조트 도착 및 체크인', detail: '안내 데스크 픽업 및 객실 배정', tags: ['arrival'], type: '' },
      { time: '12:00', title: '점심 식사', detail: '리조트 식당 (단체 식사)', tags: ['meal'], type: 'meal' },
      { time: '14:00\n~\n17:00', title: '등록 및 오리엔테이션', detail: '행사 등록 · 명찰 수령 · 전체 안내\n장소: 컨퍼런스홀 A', tags: [], type: '' },
      { time: '17:00\n~\n18:00', title: '자유 시간', detail: '리조트 시설 이용 · 산책 · 담소', tags: ['free'], type: 'free' },
      { time: '18:00', title: '저녁 식사', detail: '리조트 식당 (단체 식사)', tags: ['meal'], type: 'meal' },
      { time: '19:30\n~\n21:30', title: '1부 저녁 집회', detail: '찬양 · 말씀 · 기도\n장소: 대강당\n설교: 담임목사 (성서침례교회)', tags: ['worship'], type: 'highlight' },
      { time: '21:30\n~\n23:00', title: '친교의 밤', detail: '지역별 모임 · 차와 다과 · 교제\n장소: 로비 및 라운지', tags: ['free'], type: '' },
    ],
    /* Day 2: 4월 21일 (화) */
    [
      { time: '06:30\n~\n07:30', title: '새벽 기도회', detail: '자유 참여 · 중보기도 · 묵상\n장소: 채플실', tags: ['worship'], type: 'highlight' },
      { time: '07:30', title: '아침 식사', detail: '리조트 식당 (단체 식사)', tags: ['meal'], type: 'meal' },
      { time: '09:00\n~\n10:30', title: '전체 회의 1부', detail: '안건 보고 · 지역별 현황 공유\n장소: 컨퍼런스홀 A', tags: ['meeting'], type: '' },
      { time: '10:30\n~\n10:50', title: '커피 브레이크', detail: '휴식 및 담소', tags: ['free'], type: 'free' },
      { time: '10:50\n~\n12:00', title: '전체 회의 2부', detail: '향후 사역 방향 논의 · 분과별 발표\n장소: 컨퍼런스홀 A', tags: ['meeting'], type: '' },
      { time: '12:00', title: '점심 식사', detail: '리조트 식당 (단체 식사)', tags: ['meal'], type: 'meal' },
      { time: '14:00\n~\n16:00', title: '분과 모임', detail: '지역별 · 사역별 소그룹 모임\n각 소회의실 활용', tags: ['meeting'], type: '' },
      { time: '16:00\n~\n17:30', title: '자유 시간 & 레크리에이션', detail: '수영장 · 스파 · 경주 주변 관광\n(선택 사항)', tags: ['free'], type: 'free' },
      { time: '18:00', title: '저녁 식사', detail: '특별 만찬 (리조트 연회장)', tags: ['meal'], type: 'meal' },
      { time: '19:30\n~\n21:30', title: '2부 저녁 집회', detail: '찬양 · 말씀 · 성찬식\n장소: 대강당\n설교: 초청 강사', tags: ['worship'], type: 'highlight' },
      { time: '21:30', title: '지역별 교제 모임', detail: '지역담당자 주관 소모임\n라운지 및 객실', tags: ['free'], type: '' },
    ],
    /* Day 3: 4월 22일 (수) */
    [
      { time: '06:30\n~\n07:30', title: '새벽 기도회', detail: '합심 기도 · 마무리 묵상\n장소: 채플실', tags: ['worship'], type: 'highlight' },
      { time: '07:30', title: '아침 식사', detail: '리조트 식당 (단체 식사)', tags: ['meal'], type: 'meal' },
      { time: '09:00\n~\n10:30', title: '임원회의 & 결산 보고', detail: '임원진 회의 · 결산 보고 · 차기 행사 논의\n장소: 소회의실 B', tags: ['meeting'], type: '' },
      { time: '10:30\n~\n11:30', title: '3부 마지막 집회', detail: '나눔과 간증 · 파송 기도회\n장소: 대강당', tags: ['worship'], type: 'highlight' },
      { time: '11:30\n~\n12:00', title: '폐회 및 기념 촬영', detail: '단체 기념 사진 촬영\n리조트 야외 광장', tags: [], type: '' },
      { time: '12:00', title: '점심 식사 및 체크아웃', detail: '마지막 식사 후 체크아웃\n안전한 귀가를 기원합니다 🙏', tags: ['meal'], type: 'meal' },
    ]
  ],

  /* 집회 및 회의 안내 */
  meetings: [
    {
      icon: '🙏',
      title: '전체 집회',
      sub: '저녁 19:30 · 대강당',
      details: [
        { icon: '📅', label: '일정', text: '<strong>1부</strong> 4/20(월) 19:30 · <strong>2부</strong> 4/21(화) 19:30 · <strong>3부</strong> 4/22(수) 10:30' },
        { icon: '📍', label: '장소', text: '<strong>리조트 대강당</strong> (수용 인원: 300명)' },
        { icon: '🎵', label: '찬양', text: '찬양팀 인도 · 통성기도·묵상기도 포함' },
        { icon: '📖', label: '설교', text: '1부: 담임목사 / 2부: 초청강사 / 3부: 나눔 및 파송기도' },
        { icon: '🕯', label: '특이사항', text: '2부 집회 시 <strong>성찬식</strong> 진행 예정' }
      ]
    },
    {
      icon: '📋',
      title: '전체 회의',
      sub: '4월 21일(화) 09:00 · 컨퍼런스홀 A',
      details: [
        { icon: '📅', label: '일정', text: '<strong>1부</strong> 09:00~10:30 · <strong>2부</strong> 10:50~12:00' },
        { icon: '📍', label: '장소', text: '<strong>컨퍼런스홀 A</strong> (1층)' },
        { icon: '📌', label: '안건', text: '• 지역별 사역 현황 보고<br>• 2026년 사역 방향 논의<br>• 다음 친교회 일정 조율' },
        { icon: '👤', label: '진행', text: '총무 인도 · 각 지역 대표 발언' }
      ]
    },
    {
      icon: '🤝',
      title: '분과 모임',
      sub: '4월 21일(화) 14:00 · 소회의실',
      details: [
        { icon: '📅', label: '일정', text: '4/21(화) 14:00~16:00 (2시간)' },
        { icon: '📍', label: '장소', text: '소회의실 A·B·C·D (층별 안내)' },
        { icon: '📌', label: '분과', text: '• 지역별 그룹 (영남/호남/수도권/충청)<br>• 청년 목회자 모임<br>• 부부 동반 모임' },
        { icon: '📝', label: '내용', text: '사역 나눔 · 기도 제목 공유 · 중보 기도' }
      ]
    },
    {
      icon: '⚙️',
      title: '임원회의',
      sub: '4월 22일(수) 09:00 · 소회의실 B',
      details: [
        { icon: '📅', label: '일정', text: '4/22(수) 09:00~10:30' },
        { icon: '📍', label: '장소', text: '<strong>소회의실 B</strong> (2층)' },
        { icon: '👥', label: '참석', text: '회장·부회장·총무·회계·각 지역 대표' },
        { icon: '📌', label: '안건', text: '결산 보고 · 차기 행사 계획 · 임원진 안건' }
      ]
    },
    {
      icon: '🌅',
      title: '새벽 기도회',
      sub: '매일 06:30 · 채플실 (자유 참여)',
      details: [
        { icon: '📅', label: '일정', text: '4/21(화), 4/22(수) 06:30~07:30' },
        { icon: '📍', label: '장소', text: '<strong>채플실</strong> (B1층)' },
        { icon: '📌', label: '내용', text: '개인 기도 · 합심 기도 · 말씀 묵상' },
        { icon: 'ℹ️', label: '안내', text: '자유 참여 (필수 아님) · 조용한 묵상 시간' }
      ]
    }
  ],

  /* 참석자 데이터 */
  attendees: [
    {
        "id": 1,
        "name": "이정삼",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1206",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 2,
        "name": "김용숙",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1206",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 3,
        "name": "김학수",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1209",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 4,
        "name": "주견자",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1209",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 5,
        "name": "장창호",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1215",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 6,
        "name": "정해숙",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1215",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 7,
        "name": "최정식",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1210",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 8,
        "name": "권미애",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1210",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 9,
        "name": "김홍길",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1201",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 10,
        "name": "이순자",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1201",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 11,
        "name": "이명규",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1211",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 12,
        "name": "남선희",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1211",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 13,
        "name": "이은철",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1214",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 14,
        "name": "임현희",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1214",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 15,
        "name": "김경석",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1218",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 16,
        "name": "채승희",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1218",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 17,
        "name": "라영규",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1202",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 18,
        "name": "장윤숙",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1202",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 19,
        "name": "김상완",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1205",
        "contact": "",
        "note": "17평, 1일"
    },
    {
        "id": 20,
        "name": "김성혜",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1205",
        "contact": "",
        "note": "17평, 1일"
    },
    {
        "id": 21,
        "name": "이승록",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2101",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 22,
        "name": "손은미",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2101",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 23,
        "name": "심재혁",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2102",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 24,
        "name": "엄승희",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2102",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 25,
        "name": "이승훈 가족",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2105",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 26,
        "name": "유병현 가족",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2106",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 27,
        "name": "김성진",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2103",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 28,
        "name": "이승호 정창욱",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2103",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 29,
        "name": "김지수",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2103",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 30,
        "name": "김관준",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2104",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 31,
        "name": "오상률",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2104",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 32,
        "name": "박세호",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2104",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 33,
        "name": "이강헌",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2104",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 34,
        "name": "이형주 가족",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2108",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 35,
        "name": "송기창 가족",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "별관 2109",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 36,
        "name": "박세용 부부",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "spouse",
        "room": "본관 1208",
        "contact": "",
        "note": "25평, 1일"
    },
    {
        "id": 37,
        "name": "김병석 부부",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "spouse",
        "room": "본관 1208",
        "contact": "",
        "note": "25평, 1일"
    },
    {
        "id": 38,
        "name": "김명순 부부",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "spouse",
        "room": "본관 1203",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 39,
        "name": "최정기",
        "church": "서울친교회",
        "region": "서울친교회",
        "role": "pastor",
        "room": "본관 1203",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 40,
        "name": "김용웅",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1309",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 41,
        "name": "박옥자",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1309",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 42,
        "name": "박선종",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1301",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 43,
        "name": "윤순자",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1301",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 44,
        "name": "이오림",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1306",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 45,
        "name": "이근이",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1306",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 46,
        "name": "전병호",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1310",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 47,
        "name": "박옥희",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1310",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 48,
        "name": "이재기",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1318",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 49,
        "name": "문현숙",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1318",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 50,
        "name": "김만홍",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2505",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 51,
        "name": "신철남",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2505",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 52,
        "name": "문정용",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2501",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 53,
        "name": "김미영",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2501",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 54,
        "name": "정민철",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1217",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 55,
        "name": "주석영",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1217",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 56,
        "name": "박정혁 가족",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1217",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 57,
        "name": "박창신",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1412",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 58,
        "name": "장혜경",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1412",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 59,
        "name": "박일래",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1216",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 60,
        "name": "하은주",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1216",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 61,
        "name": "김영태",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1216",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 62,
        "name": "이지은",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1216",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 63,
        "name": "정동명 가족",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1207",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 64,
        "name": "오수정",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1207",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 65,
        "name": "전윤택",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1204",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 66,
        "name": "이뵈뵈",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1204",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 67,
        "name": "정하영",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1204",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 68,
        "name": "윤석호",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1212",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 69,
        "name": "유영이",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1212",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 70,
        "name": "엄선용",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1212",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 71,
        "name": "허성구",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1212",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 72,
        "name": "김조동",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1307",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 73,
        "name": "SWATH",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1307",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 74,
        "name": "SREY AUN",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1307",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 75,
        "name": "PHALIN",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1308",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 76,
        "name": "LIDE",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1308",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 77,
        "name": "SOKHA",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1308",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 78,
        "name": "VICHORA",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "본관 1308",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 79,
        "name": "박동근",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2206",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 80,
        "name": "석복순",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2206",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 81,
        "name": "손인석",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2107",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 82,
        "name": "성정희",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2107",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 83,
        "name": "김기명",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2208",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 84,
        "name": "김미희",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2208",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 85,
        "name": "여우석",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2207",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 86,
        "name": "강미선",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2207",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 87,
        "name": "이상돈",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2201",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 88,
        "name": "김 선",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2201",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 89,
        "name": "유재명",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2202",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 90,
        "name": "신경애",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2202",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 91,
        "name": "전대경",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2209",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 92,
        "name": "김민경 가족",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2209",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 93,
        "name": "유병선",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2204",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 94,
        "name": "신효선 가족",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2204",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 95,
        "name": "강태진",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2203",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 96,
        "name": "김종주",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2203",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 97,
        "name": "자녀 1",
        "church": "경인친교회",
        "region": "경인친교회",
        "role": "pastor",
        "room": "별관 2203",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 98,
        "name": "김기준",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1401",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 99,
        "name": "이금실",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1401",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 100,
        "name": "강효민",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1408",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 101,
        "name": "강세라",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1408",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 102,
        "name": "박규용",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1311",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 103,
        "name": "김경숙",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1311",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 104,
        "name": "김두성",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1409",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 105,
        "name": "이미녕",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1409",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 106,
        "name": "김완수",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1407",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 107,
        "name": "이형심",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1407",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 108,
        "name": "김길숙",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1315",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 109,
        "name": "정순혜",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1315",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 110,
        "name": "김삼영",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2308",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 111,
        "name": "이기준",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2308",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 112,
        "name": "하원효",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2205",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 113,
        "name": "김순정",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2205",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 114,
        "name": "박동현 가족",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2305",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 115,
        "name": "임충만 가족",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2306",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 116,
        "name": "정영광 가족",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2307",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 117,
        "name": "류현택",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1304",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 118,
        "name": "강성순",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1304",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 119,
        "name": "정선영",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1303",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 120,
        "name": "정성길",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1303",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 121,
        "name": "자녀",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1303",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 122,
        "name": "이정삼",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1213",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 123,
        "name": "김경희",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1213",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 124,
        "name": "정하권 부부",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "spouse",
        "room": "본관 1317",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 125,
        "name": "Jameson 부부",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "spouse",
        "room": "본관 1317",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 126,
        "name": "한인숙",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1316",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 127,
        "name": "한연심",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1316",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 128,
        "name": "윤정희",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "본관 1316",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 129,
        "name": "박상준 부부",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "spouse",
        "room": "본관 1312",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 130,
        "name": "조경길 부부",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "spouse",
        "room": "본관 1312",
        "contact": "",
        "note": "25평, 3일"
    },
    {
        "id": 131,
        "name": "오성현 부부",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "spouse",
        "room": "본관 1313",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 132,
        "name": "김승수 부부",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "spouse",
        "room": "본관 1313",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 133,
        "name": "정규영 가족",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2304",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 134,
        "name": "이선정 가족",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2507",
        "contact": "",
        "note": "25평, 1일"
    },
    {
        "id": 135,
        "name": "정지원",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2605",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 136,
        "name": "박정수",
        "church": "경원친교회",
        "region": "경원친교회",
        "role": "pastor",
        "room": "별관 2605",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 137,
        "name": "노명학",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1514",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 138,
        "name": "한영배",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1514",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 139,
        "name": "1명",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1514",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 140,
        "name": "유봉호",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1305",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 141,
        "name": "김길숙",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1305",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 142,
        "name": "손용암",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1414",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 143,
        "name": "김상옥",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1414",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 144,
        "name": "김성준",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1402",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 145,
        "name": "박순옥",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1402",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 146,
        "name": "김부길",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1505",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 147,
        "name": "장선경",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1505",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 148,
        "name": "이철규",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1314",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 149,
        "name": "조동길 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "본관 1405",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 150,
        "name": "강성기 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "본관 1405",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 151,
        "name": "우치열 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "본관 1413",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 152,
        "name": "정훈",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1413",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 153,
        "name": "지번",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "pastor",
        "room": "본관 1413",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 154,
        "name": "윤광우 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "본관 1404",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 155,
        "name": "정재화 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "본관 1404",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 156,
        "name": "손덕철 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "별관 2309",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 157,
        "name": "김구섭 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "별관 2309",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 158,
        "name": "손춘영 부부",
        "church": "영남친교회",
        "region": "영남친교회",
        "role": "spouse",
        "room": "본관 1507",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 159,
        "name": "김공만",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "pastor",
        "room": "본관 1502",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 160,
        "name": "김국태",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "pastor",
        "room": "본관 1502",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 161,
        "name": "신해영 부부",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "spouse",
        "room": "본관 1501",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 162,
        "name": "오상권 부부",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "spouse",
        "room": "별관 2301",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 163,
        "name": "강민구 가족",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "pastor",
        "room": "본관 1406",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 164,
        "name": "김종덕 부부",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "spouse",
        "room": "별관 2310",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 165,
        "name": "박안수 부부",
        "church": "호남친교회",
        "region": "호남친교회",
        "role": "spouse",
        "room": "별관 2310",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 166,
        "name": "최철광 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "본관 1508",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 167,
        "name": "이강산 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "본관 1509",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 168,
        "name": "김세현 가족",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "pastor",
        "room": "본관 2505",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 169,
        "name": "김세창 가족",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "pastor",
        "room": "별관 2302",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 170,
        "name": "김민령 가족",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "pastor",
        "room": "별관 2405",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 171,
        "name": "방의택 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "본관 1403",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 172,
        "name": "이요한 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "본관 1403",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 173,
        "name": "이영국 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "본관 1410",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 174,
        "name": "김길용 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "본관 1410",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 175,
        "name": "전재삼 부부",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "spouse",
        "room": "별관 2303",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 176,
        "name": "박순채",
        "church": "중부친교회",
        "region": "중부친교회",
        "role": "pastor",
        "room": "별관 2303",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 177,
        "name": "김정웅",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1605",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 178,
        "name": "유명희",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1605",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 179,
        "name": "정명화",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1610",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 180,
        "name": "조금선",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1610",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 181,
        "name": "하현복",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1302",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 182,
        "name": "박현숙",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1302",
        "contact": "",
        "note": "17평, 3일"
    },
    {
        "id": 183,
        "name": "이대은",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1601",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 184,
        "name": "정미영",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1601",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 185,
        "name": "문무철",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1607",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 186,
        "name": "권수경",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1607",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 187,
        "name": "이건우",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1411",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 188,
        "name": "안정환",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "본관 1411",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 189,
        "name": "이호준 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "본관 1606",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 190,
        "name": "장태범 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "본관 1506",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 191,
        "name": "장기영 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "본관 1506",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 192,
        "name": "한연석 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "본관 1513",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 193,
        "name": "정진국 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "본관 1513",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 194,
        "name": "이광배 가족",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "별관 2406",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 195,
        "name": "한권희 가족",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "별관 2407",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 196,
        "name": "고현식 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "별관 2408",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 197,
        "name": "강전구",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "별관 2404",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 198,
        "name": "봉세창",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "별관 2404",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 199,
        "name": "김병태",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "별관 2404",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 200,
        "name": "신현섭 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "별관 2409",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 201,
        "name": "이도인 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "별관 2409",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 202,
        "name": "김재경 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "별관 2403",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 203,
        "name": "정상직 부부",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "spouse",
        "room": "별관 2403",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 204,
        "name": "모리모토",
        "church": "경충친교회",
        "region": "경충친교회",
        "role": "pastor",
        "room": "별관 2502",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 205,
        "name": "김택수",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1602",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 206,
        "name": "김광모",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1512",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 207,
        "name": "정종문",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1512",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 208,
        "name": "엄태항",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1512",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 209,
        "name": "박상복 부부",
        "church": "신학교",
        "region": "신학교",
        "role": "spouse",
        "room": "본관 1510",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 210,
        "name": "정재영 가족",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1510",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 211,
        "name": "한현수 가족",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "별관 2402",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 212,
        "name": "김순이",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "별관 2401",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 213,
        "name": "곽옥영",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "별관 2401",
        "contact": "",
        "note": "17평, 2일"
    },
    {
        "id": 214,
        "name": "고한결",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1504",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 215,
        "name": "김기훈",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1504",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 216,
        "name": "이상은",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1504",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 217,
        "name": "최하솜",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1503",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 218,
        "name": "이옥숙",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1503",
        "contact": "",
        "note": "25평, 2일"
    },
    {
        "id": 219,
        "name": "이상희",
        "church": "신학교",
        "region": "신학교",
        "role": "pastor",
        "room": "본관 1503",
        "contact": "",
        "note": "25평, 2일"
    }
],

  /* 숙소 배치 */
  rooms: [
    {
        "building": "본관",
        "color": "#c9a227",
        "rooms": [
            {
                "number": "1206",
                "residents": [
                    {
                        "name": "이정삼",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김용숙",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1209",
                "residents": [
                    {
                        "name": "김학수",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "주견자",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1215",
                "residents": [
                    {
                        "name": "장창호",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "정해숙",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1210",
                "residents": [
                    {
                        "name": "최정식",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "권미애",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1201",
                "residents": [
                    {
                        "name": "김홍길",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이순자",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1211",
                "residents": [
                    {
                        "name": "이명규",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "남선희",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1214",
                "residents": [
                    {
                        "name": "이은철",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "임현희",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1218",
                "residents": [
                    {
                        "name": "김경석",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "채승희",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1202",
                "residents": [
                    {
                        "name": "라영규",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "장윤숙",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1205",
                "residents": [
                    {
                        "name": "김상완",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김성혜",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1208",
                "residents": [
                    {
                        "name": "박세용 부부",
                        "church": "서울친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "김병석 부부",
                        "church": "서울친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1203",
                "residents": [
                    {
                        "name": "김명순 부부",
                        "church": "서울친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "최정기",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1309",
                "residents": [
                    {
                        "name": "김용웅",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박옥자",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1301",
                "residents": [
                    {
                        "name": "박선종",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "윤순자",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1306",
                "residents": [
                    {
                        "name": "이오림",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이근이",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1310",
                "residents": [
                    {
                        "name": "전병호",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박옥희",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1318",
                "residents": [
                    {
                        "name": "이재기",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "문현숙",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1217",
                "residents": [
                    {
                        "name": "정민철",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "주석영",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박정혁 가족",
                        "church": "경인친교회",
                        "role": "가족"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1412",
                "residents": [
                    {
                        "name": "박창신",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "장혜경",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1216",
                "residents": [
                    {
                        "name": "박일래",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "하은주",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김영태",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이지은",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1207",
                "residents": [
                    {
                        "name": "정동명 가족",
                        "church": "경인친교회",
                        "role": "가족"
                    },
                    {
                        "name": "오수정",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1204",
                "residents": [
                    {
                        "name": "전윤택",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이뵈뵈",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "정하영",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1212",
                "residents": [
                    {
                        "name": "윤석호",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "유영이",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "엄선용",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "허성구",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1307",
                "residents": [
                    {
                        "name": "김조동",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "SWATH",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "SREY AUN",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1308",
                "residents": [
                    {
                        "name": "PHALIN",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "LIDE",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "SOKHA",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "VICHORA",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1401",
                "residents": [
                    {
                        "name": "김기준",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이금실",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1408",
                "residents": [
                    {
                        "name": "강효민",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "강세라",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1311",
                "residents": [
                    {
                        "name": "박규용",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김경숙",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1409",
                "residents": [
                    {
                        "name": "김두성",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이미녕",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1407",
                "residents": [
                    {
                        "name": "김완수",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이형심",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1315",
                "residents": [
                    {
                        "name": "김길숙",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "정순혜",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1304",
                "residents": [
                    {
                        "name": "류현택",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "강성순",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1303",
                "residents": [
                    {
                        "name": "정선영",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "정성길",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "자녀",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1213",
                "residents": [
                    {
                        "name": "이정삼",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김경희",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1317",
                "residents": [
                    {
                        "name": "정하권 부부",
                        "church": "경원친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "Jameson 부부",
                        "church": "경원친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1316",
                "residents": [
                    {
                        "name": "한인숙",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "한연심",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "윤정희",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1312",
                "residents": [
                    {
                        "name": "박상준 부부",
                        "church": "경원친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "조경길 부부",
                        "church": "경원친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1313",
                "residents": [
                    {
                        "name": "오성현 부부",
                        "church": "경원친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "김승수 부부",
                        "church": "경원친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1514",
                "residents": [
                    {
                        "name": "노명학",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "한영배",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "1명",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1305",
                "residents": [
                    {
                        "name": "유봉호",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김길숙",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1414",
                "residents": [
                    {
                        "name": "손용암",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김상옥",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1402",
                "residents": [
                    {
                        "name": "김성준",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박순옥",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1505",
                "residents": [
                    {
                        "name": "김부길",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "장선경",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1314",
                "residents": [
                    {
                        "name": "이철규",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1405",
                "residents": [
                    {
                        "name": "조동길 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "강성기 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1413",
                "residents": [
                    {
                        "name": "우치열 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "정훈",
                        "church": "영남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "지번",
                        "church": "영남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1404",
                "residents": [
                    {
                        "name": "윤광우 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "정재화 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1507",
                "residents": [
                    {
                        "name": "손춘영 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1502",
                "residents": [
                    {
                        "name": "김공만",
                        "church": "호남친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김국태",
                        "church": "호남친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1501",
                "residents": [
                    {
                        "name": "신해영 부부",
                        "church": "호남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1406",
                "residents": [
                    {
                        "name": "강민구 가족",
                        "church": "호남친교회",
                        "role": "가족"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1508",
                "residents": [
                    {
                        "name": "최철광 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1509",
                "residents": [
                    {
                        "name": "이강산 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "2505",
                "residents": [
                    {
                        "name": "김세현 가족",
                        "church": "중부친교회",
                        "role": "가족"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1403",
                "residents": [
                    {
                        "name": "방의택 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "이요한 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1410",
                "residents": [
                    {
                        "name": "이영국 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "김길용 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1605",
                "residents": [
                    {
                        "name": "김정웅",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "유명희",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1610",
                "residents": [
                    {
                        "name": "정명화",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "조금선",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1302",
                "residents": [
                    {
                        "name": "하현복",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박현숙",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1601",
                "residents": [
                    {
                        "name": "이대은",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "정미영",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1607",
                "residents": [
                    {
                        "name": "문무철",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "권수경",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1411",
                "residents": [
                    {
                        "name": "이건우",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "안정환",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1606",
                "residents": [
                    {
                        "name": "이호준 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1506",
                "residents": [
                    {
                        "name": "장태범 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "장기영 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1513",
                "residents": [
                    {
                        "name": "한연석 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "정진국 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1602",
                "residents": [
                    {
                        "name": "김택수",
                        "church": "신학교",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1512",
                "residents": [
                    {
                        "name": "김광모",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "정종문",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "엄태항",
                        "church": "신학교",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1510",
                "residents": [
                    {
                        "name": "박상복 부부",
                        "church": "신학교",
                        "role": "배우자"
                    },
                    {
                        "name": "정재영 가족",
                        "church": "신학교",
                        "role": "가족"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1504",
                "residents": [
                    {
                        "name": "고한결",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "김기훈",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "이상은",
                        "church": "신학교",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            },
            {
                "number": "1503",
                "residents": [
                    {
                        "name": "최하솜",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "이옥숙",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "이상희",
                        "church": "신학교",
                        "role": "목사"
                    }
                ],
                "building": "본관"
            }
        ]
    },
    {
        "building": "별관",
        "color": "#3949ab",
        "rooms": [
            {
                "number": "2101",
                "residents": [
                    {
                        "name": "이승록",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "손은미",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2102",
                "residents": [
                    {
                        "name": "심재혁",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "엄승희",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2105",
                "residents": [
                    {
                        "name": "이승훈 가족",
                        "church": "서울친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2106",
                "residents": [
                    {
                        "name": "유병현 가족",
                        "church": "서울친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2103",
                "residents": [
                    {
                        "name": "김성진",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이승호 정창욱",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김지수",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2104",
                "residents": [
                    {
                        "name": "김관준",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "오상률",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박세호",
                        "church": "서울친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이강헌",
                        "church": "서울친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2108",
                "residents": [
                    {
                        "name": "이형주 가족",
                        "church": "서울친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2109",
                "residents": [
                    {
                        "name": "송기창 가족",
                        "church": "서울친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2505",
                "residents": [
                    {
                        "name": "김만홍",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "신철남",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2501",
                "residents": [
                    {
                        "name": "문정용",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김미영",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2206",
                "residents": [
                    {
                        "name": "박동근",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "석복순",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2107",
                "residents": [
                    {
                        "name": "손인석",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "성정희",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2208",
                "residents": [
                    {
                        "name": "김기명",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김미희",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2207",
                "residents": [
                    {
                        "name": "여우석",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "강미선",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2201",
                "residents": [
                    {
                        "name": "이상돈",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김 선",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2202",
                "residents": [
                    {
                        "name": "유재명",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "신경애",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2209",
                "residents": [
                    {
                        "name": "전대경",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김민경 가족",
                        "church": "경인친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2204",
                "residents": [
                    {
                        "name": "유병선",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "신효선 가족",
                        "church": "경인친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2203",
                "residents": [
                    {
                        "name": "강태진",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김종주",
                        "church": "경인친교회",
                        "role": "목사"
                    },
                    {
                        "name": "자녀 1",
                        "church": "경인친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2308",
                "residents": [
                    {
                        "name": "김삼영",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "이기준",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2205",
                "residents": [
                    {
                        "name": "하원효",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김순정",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2305",
                "residents": [
                    {
                        "name": "박동현 가족",
                        "church": "경원친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2306",
                "residents": [
                    {
                        "name": "임충만 가족",
                        "church": "경원친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2307",
                "residents": [
                    {
                        "name": "정영광 가족",
                        "church": "경원친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2304",
                "residents": [
                    {
                        "name": "정규영 가족",
                        "church": "경원친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2507",
                "residents": [
                    {
                        "name": "이선정 가족",
                        "church": "경원친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2605",
                "residents": [
                    {
                        "name": "정지원",
                        "church": "경원친교회",
                        "role": "목사"
                    },
                    {
                        "name": "박정수",
                        "church": "경원친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2309",
                "residents": [
                    {
                        "name": "손덕철 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "김구섭 부부",
                        "church": "영남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2301",
                "residents": [
                    {
                        "name": "오상권 부부",
                        "church": "호남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2310",
                "residents": [
                    {
                        "name": "김종덕 부부",
                        "church": "호남친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "박안수 부부",
                        "church": "호남친교회",
                        "role": "배우자"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2302",
                "residents": [
                    {
                        "name": "김세창 가족",
                        "church": "중부친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2405",
                "residents": [
                    {
                        "name": "김민령 가족",
                        "church": "중부친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2303",
                "residents": [
                    {
                        "name": "전재삼 부부",
                        "church": "중부친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "박순채",
                        "church": "중부친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2406",
                "residents": [
                    {
                        "name": "이광배 가족",
                        "church": "경충친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2407",
                "residents": [
                    {
                        "name": "한권희 가족",
                        "church": "경충친교회",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2408",
                "residents": [
                    {
                        "name": "고현식 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2404",
                "residents": [
                    {
                        "name": "강전구",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "봉세창",
                        "church": "경충친교회",
                        "role": "목사"
                    },
                    {
                        "name": "김병태",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2409",
                "residents": [
                    {
                        "name": "신현섭 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "이도인 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2403",
                "residents": [
                    {
                        "name": "김재경 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    },
                    {
                        "name": "정상직 부부",
                        "church": "경충친교회",
                        "role": "배우자"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2502",
                "residents": [
                    {
                        "name": "모리모토",
                        "church": "경충친교회",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2402",
                "residents": [
                    {
                        "name": "한현수 가족",
                        "church": "신학교",
                        "role": "가족"
                    }
                ],
                "building": "별관"
            },
            {
                "number": "2401",
                "residents": [
                    {
                        "name": "김순이",
                        "church": "신학교",
                        "role": "목사"
                    },
                    {
                        "name": "곽옥영",
                        "church": "신학교",
                        "role": "목사"
                    }
                ],
                "building": "별관"
            }
        ]
    }
],

  /* 앨범 */
  albumCategories: ['전체', '집회', '회의', '교제', '풍경'],
  albumItems: [
    { id: 1, cat: '집회', emoji: '🙏', label: '1부 저녁집회', color: 1 },
    { id: 2, cat: '교제', emoji: '😊', label: '친교의 밤', color: 2 },
    { id: 3, cat: '풍경', emoji: '🌊', label: '리조트 전경', color: 3 },
    { id: 4, cat: '회의', emoji: '📋', label: '전체회의', color: 4 },
    { id: 5, cat: '집회', emoji: '✝️', label: '성찬식', color: 5 },
    { id: 6, cat: '교제', emoji: '🍽️', label: '만찬', color: 6 },
    { id: 7, cat: '풍경', emoji: '🌅', label: '경주 일출', color: 7 },
    { id: 8, cat: '교제', emoji: '📸', label: '단체사진', color: 8 },
    { id: 9, cat: '집회', emoji: '🎵', label: '찬양시간', color: 9 },
  ]
};

/* ==================================
   STATE
   ================================== */
let currentPage = 'home';
let currentDay = 0;
let currentAlbumCat = '전체';
let currentRegion = '전체';
let attendeeSearchQuery = '';

/* ==================================
   INIT
   ================================== */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initApp();
  }, 2100);
});

function initApp() {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');

  splash.classList.add('fade-out');
  setTimeout(() => {
    splash.style.display = 'none';
    app.classList.remove('hidden');
    buildAll();
    updateCountdown();
    setInterval(updateCountdown, 1000 * 60);
  }, 700);
}

function buildAll() {
  buildSchedule();
  buildMeetings();
  buildRooms();
  buildAttendees();
  buildNotices();
  buildAlbum();
  buildNoticePreview();
}

/* ==================================
   NAVIGATION
   ================================== */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById(`page-${name}`);
  const navBtn = document.getElementById(`nav-${name}`);

  if (page) {
    page.classList.add('active');
    document.getElementById('pagesContainer').scrollTop = 0;
  }
  if (navBtn) navBtn.classList.add('active');

  currentPage = name;

  // Focus search if needed
  if (name === 'search') {
    setTimeout(() => {
      const inp = document.getElementById('globalSearch');
      if (inp) inp.focus();
    }, 350);
  }
}

/* ==================================
   COUNTDOWN
   ================================== */
function updateCountdown() {
  const target = new Date('2026-04-20T10:00:00+09:00');
  const now = new Date();
  const diff = target - now;

  const el = document.getElementById('heroCountdown');
  if (!el) return;

  if (diff <= 0) {
    el.innerHTML = `<div class="countdown-box"><span class="countdown-num">🙏</span><span class="countdown-lbl">진행중</span></div>`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  el.innerHTML = `
    <div class="countdown-box"><span class="countdown-num">${days}</span><span class="countdown-lbl">일</span></div>
    <div class="countdown-box"><span class="countdown-num">${String(hours).padStart(2,'0')}</span><span class="countdown-lbl">시간</span></div>
    <div class="countdown-box"><span class="countdown-num">${String(mins).padStart(2,'0')}</span><span class="countdown-lbl">분</span></div>
  `;
}

/* ==================================
   BUILD SCHEDULE
   ================================== */
function buildSchedule() {
  const tagColors = {
    'worship': 's-tag-worship',
    'meal': 's-tag-meal',
    'meeting': 's-tag-meeting',
    'free': 's-tag-free',
    'arrival': 's-tag-arrival'
  };
  const tagLabels = {
    'worship': '✝ 집회',
    'meal': '🍽 식사',
    'meeting': '📋 회의',
    'free': '🌿 자유',
    'arrival': '🚗 이동'
  };

  DATA.timetable.forEach((dayItems, dayIdx) => {
    const container = document.getElementById(`scheduleDay${dayIdx}`);
    if (!container) return;

    container.innerHTML = dayItems.map(item => `
      <div class="schedule-item">
        <div class="schedule-time-col">
          <span class="schedule-time">${item.time}</span>
        </div>
        <div class="schedule-dot"></div>
        <div class="schedule-content ${item.type}">
          <div class="schedule-title">${item.title}</div>
          <div class="schedule-detail">${item.detail.replace(/\n/g, '<br/>')}</div>
          ${item.tags.length > 0 ? `
            <div class="schedule-tags">
              ${item.tags.map(t => `<span class="s-tag ${tagColors[t] || ''}">${tagLabels[t] || t}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  });
}

function switchDay(idx, btn) {
  currentDay = idx;
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.schedule-list').forEach(l => l.classList.add('hidden'));
  btn.classList.add('active');
  const sl = document.getElementById(`scheduleDay${idx}`);
  if (sl) sl.classList.remove('hidden');
}

/* ==================================
   BUILD MEETINGS
   ================================== */
function buildMeetings() {
  const container = document.getElementById('meetingsContent');
  if (!container) return;

  container.innerHTML = DATA.meetings.map(m => `
    <div class="meeting-card">
      <div class="meeting-card-header">
        <div class="meeting-icon">${m.icon}</div>
        <div>
          <div class="meeting-card-title">${m.title}</div>
          <div class="meeting-card-sub">${m.sub}</div>
        </div>
      </div>
      <div class="meeting-card-body">
        ${m.details.map(d => `
          <div class="meeting-detail-row">
            <span class="meeting-detail-icon">${d.icon}</span>
            <span class="meeting-detail-text"><strong>${d.label}:</strong> ${d.text}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==================================
   BUILD FACILITY + ROOMS
   ================================== */
function buildRooms() {
  buildFacilityMap();
  renderRoomList('');
}

function buildFacilityMap() {
  const container = document.getElementById('facilityMap');
  if (!container) return;

  container.innerHTML = `
    <div class="facility-map-visual" style="min-height: 340px; position: relative;">
      <!-- Map label -->
      <div style="text-align:center; margin-bottom: 16px; position: relative; z-index: 2;">
        <span style="font-size:0.8rem; color:var(--accent-light); font-weight:700; letter-spacing:.05em;">경주 성호리조트 배치도</span>
      </div>

      <!-- 리조트 구역 -->
      <div style="position: relative; width: 100%; height: 260px;">

        <!-- 대강당 -->
        <div class="f-building highlight" style="left:5%; top:5%; width:40%; height:20%;" onclick="showBuildingInfo('대강당')">
          <span>🏛️</span><span>대강당</span>
        </div>

        <!-- 컨퍼런스홀 -->
        <div class="f-building" style="right:5%; top:5%; width:40%; height:18%;" onclick="showBuildingInfo('컨퍼런스홀')">
          <span>📋</span><span>컨퍼런스홀</span>
        </div>

        <!-- A동 -->
        <div class="f-building" style="left:5%; top:30%; width:27%; height:22%;" onclick="showBuildingInfo('A동')">
          <span>🏨</span><span>A동 (VIP)</span>
        </div>

        <!-- B동 -->
        <div class="f-building" style="left:36%; top:30%; width:27%; height:22%;" onclick="showBuildingInfo('B동')">
          <span>🏨</span><span>B동</span>
        </div>

        <!-- C동 -->
        <div class="f-building" style="right:5%; top:30%; width:27%; height:22%;" onclick="showBuildingInfo('C동')">
          <span>🏨</span><span>C동</span>
        </div>

        <!-- 식당 -->
        <div class="f-building" style="left:5%; top:57%; width:27%; height:18%;" onclick="showBuildingInfo('식당')">
          <span>🍽️</span><span>식 당</span>
        </div>

        <!-- 채플 -->
        <div class="f-building" style="left:36%; top:57%; width:27%; height:18%;" onclick="showBuildingInfo('채플실')">
          <span>✝️</span><span>채플실</span>
        </div>

        <!-- 편의시설 -->
        <div class="f-building" style="right:5%; top:57%; width:27%; height:18%;" onclick="showBuildingInfo('편의시설')">
          <span>🏊</span><span>스파/수영</span>
        </div>

        <!-- 입구 -->
        <div style="position:absolute; bottom:0; left:50%; transform:translateX(-50%); font-size:0.65rem; color:var(--accent-light); font-weight:700; background:rgba(201,162,39,0.15); padding: 4px 12px; border-radius:6px; border:1px solid rgba(201,162,39,0.3);">
          ↑ 입구 / 주차장
        </div>
      </div>
    </div>
  `;
}

function showBuildingInfo(name) {
  const info = {
    '대강당': '수용 300명 · 전체 집회 장소 · 음향/영상 시설 완비',
    '컨퍼런스홀': '컨퍼런스홀 A (120명) · 소회의실 B·C·D · 전체 회의 장소',
    'A동': 'A동 201~206호 · VIP / 가족실 · 6개 객실',
    'B동': 'B동 301~308호 · 일반 / 2인실 · 8개 객실',
    'C동': 'C동 401~406호 · 스탭 / 청년목회자 · 5개 객실',
    '식당': '조·중·석식 단체 식사 · 수용 200명',
    '채플실': '새벽 기도회 · 개인 묵상 · B1층 위치',
    '편의시설': '실내 수영장 · 사우나/스파 · 헬스장'
  };

  const modal = document.getElementById('noticeModal');
  const content = document.getElementById('noticeModalContent');
  content.innerHTML = `
    <div style="text-align:center; padding: 10px 0 16px;">
      <div style="font-size:2.5rem; margin-bottom:10px;">🏨</div>
      <div class="notice-modal-title">${name}</div>
      <p style="font-size:0.83rem; color:var(--text-muted); margin-top:8px; line-height:1.6;">${info[name] || ''}</p>
    </div>
  `;
  modal.classList.add('show');
}

function renderRoomList(query) {
  const container = document.getElementById('roomList');
  if (!container) return;

  const q = query.toLowerCase();
  let html = '';

  DATA.rooms.forEach(building => {
    const filtered = building.rooms.filter(room => {
      if (!q) return true;
      return room.name || room.residents.some(r =>
        r.name.includes(q) || r.church.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) return;

    html += `<div class="room-building-group">
      <div class="room-building-title" style="color:${building.color};">${building.building}</div>
      ${filtered.map(room => `
        <div class="room-item">
          <div class="room-number">${room.number}</div>
          <div class="room-people">
            ${room.residents.map(r => `
              <div class="room-person">${r.name}</div>
              <div class="room-church">${r.church}${r.role ? ' · ' + r.role : ''}</div>
            `).join('<div style="height:4px"></div>')}
          </div>
          <div class="room-count">${room.residents.length}명</div>
        </div>
      `).join('')}
    </div>`;
  });

  container.innerHTML = html || '<div class="search-empty-state">검색 결과가 없습니다 🔍</div>';
}

function searchRoom(val) {
  renderRoomList(val);
}

/* ==================================
   BUILD ATTENDEES
   ================================== */
function buildAttendees() {
  // Stats
  const stats = document.getElementById('attendeeStats');
  if (stats) {
    const totalPastors = DATA.attendees.filter(a => a.role === 'pastor').length;
    const totalSpouses = DATA.attendees.filter(a => a.role === 'spouse').length;
    const totalStaff = DATA.attendees.filter(a => a.role === 'staff').length;
    const total = DATA.attendees.length;

    stats.innerHTML = `
      <div class="stat-box"><div class="stat-num">${total}</div><div class="stat-label">총 참석자</div></div>
      <div class="stat-box"><div class="stat-num">${totalPastors}</div><div class="stat-label">목사</div></div>
      <div class="stat-box"><div class="stat-num">${totalSpouses}</div><div class="stat-label">배우자</div></div>
      <div class="stat-box"><div class="stat-num">${totalStaff}</div><div class="stat-label">스탭</div></div>
    `;
  }

  // Region tabs
  const regions = ['전체', ...new Set(DATA.attendees.map(a => a.region))];
  const regionTabsEl = document.getElementById('regionTabs');
  if (regionTabsEl) {
    regionTabsEl.innerHTML = regions.map(r => `
      <button class="filter-tab ${r === '전체' ? 'active' : ''}" onclick="setRegion('${r}', this)">${r}</button>
    `).join('');
  }

  renderAttendeeList();
}

function setRegion(region, btn) {
  currentRegion = region;
  document.querySelectorAll('#regionTabs .filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderAttendeeList();
}

function filterAttendees(query) {
  attendeeSearchQuery = query;
  renderAttendeeList();
}

function renderAttendeeList() {
  const container = document.getElementById('attendeeList');
  if (!container) return;

  const q = attendeeSearchQuery.toLowerCase();
  let filtered = DATA.attendees.filter(a => {
    const regionMatch = currentRegion === '전체' || a.region === currentRegion;
    const searchMatch = !q || a.name.includes(q) || a.church.toLowerCase().includes(q) || a.region.includes(q);
    return regionMatch && searchMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="search-empty-state"><div style="font-size:2.5rem">😕</div><p>검색 결과가 없습니다</p></div>';
    return;
  }

  // Group by region
  const groups = {};
  filtered.forEach(a => {
    if (!groups[a.region]) groups[a.region] = [];
    groups[a.region].push(a);
  });

  const roleLabelMap = { pastor: '목사', spouse: '배우자', staff: '스탭' };
  const roleBadgeMap = { pastor: 'role-pastor', spouse: 'role-spouse', staff: 'role-staff' };

  let html = '';
  Object.entries(groups).forEach(([region, people]) => {
    html += `<div class="attendee-list-group">
      <div class="attendee-group-header">${region} · ${people.length}명</div>
      ${people.map(a => `
        <div class="attendee-item" onclick="showAttendeeDetail(${a.id})">
          <div class="attendee-avatar">${a.name.charAt(0)}</div>
          <div class="attendee-info">
            <div class="attendee-name">${a.name}</div>
            <div class="attendee-church">${a.church}</div>
          </div>
          <span class="attendee-role-badge ${roleBadgeMap[a.role]}">${roleLabelMap[a.role]}</span>
        </div>
      `).join('')}
    </div>`;
  });

  container.innerHTML = html;
}

function showAttendeeDetail(id) {
  const a = DATA.attendees.find(x => x.id === id);
  if (!a) return;

  const roleLabelMap = { pastor: '목사', spouse: '배우자', staff: '스탭' };
  const content = document.getElementById('attendeeModalContent');
  content.innerHTML = `
    <div class="attendee-modal-hero">
      <div class="attendee-modal-avatar">${a.name.charAt(0)}</div>
      <div class="attendee-modal-name">${a.name}</div>
      <div class="attendee-modal-church">${a.church}</div>
      <span class="attendee-role-badge ${a.role === 'pastor' ? 'role-pastor' : a.role === 'spouse' ? 'role-spouse' : 'role-staff'}">${roleLabelMap[a.role]}</span>
    </div>
    <div class="attendee-modal-info">
      <div class="attendee-modal-row"><span class="attendee-modal-key">지역</span><span class="attendee-modal-val">${a.region}</span></div>
      <div class="attendee-modal-row"><span class="attendee-modal-key">숙소</span><span class="attendee-modal-val">${a.room}</span></div>
      ${a.note ? `<div class="attendee-modal-row"><span class="attendee-modal-key">비고</span><span class="attendee-modal-val">${a.note}</span></div>` : ''}
    </div>
  `;

  document.getElementById('attendeeModal').classList.add('show');
}

/* ==================================
   BUILD NOTICES
   ================================== */
function buildNoticePreview() {
  const container = document.getElementById('noticePreviewList');
  if (!container) return;

  const recent = DATA.notices.slice(0, 3);
  container.innerHTML = recent.map(n => `
    <div class="notice-preview-item" onclick="openNotice(${n.id})">
      <div class="notice-badge-dot"></div>
      <div style="flex:1">
        <div style="margin-bottom:3px">
          <span class="notice-tag tag-${n.tag}">${n.tagLabel}</span>
          <span class="notice-preview-date">${n.date}</span>
        </div>
        <div class="notice-preview-title">${n.title}</div>
      </div>
    </div>
  `).join('');
}

function buildNotices() {
  const container = document.getElementById('noticesContent');
  if (!container) return;

  container.innerHTML = DATA.notices.map(n => `
    <div class="notice-item" onclick="openNotice(${n.id})">
      <div class="notice-item-header">
        <div>
          <span class="notice-tag tag-${n.tag}">${n.tagLabel}</span>
          <span class="notice-item-title">${n.title}</span>
        </div>
        <div class="notice-item-date">${n.date}</div>
      </div>
      <div class="notice-item-preview">${n.preview}</div>
    </div>
  `).join('');
}

function openNotice(id) {
  const n = DATA.notices.find(x => x.id === id);
  if (!n) return;

  const content = document.getElementById('noticeModalContent');
  content.innerHTML = `
    <div class="notice-modal-tag"><span class="notice-tag tag-${n.tag}">${n.tagLabel}</span></div>
    <div class="notice-modal-title">${n.title}</div>
    <div class="notice-modal-date">${n.date}</div>
    <hr class="notice-modal-divider" />
    <div class="notice-modal-body">${n.body}</div>
  `;

  document.getElementById('noticeModal').classList.add('show');
}

/* ==================================
   BUILD ALBUM
   ================================== */
function buildAlbum() {
  // Category tabs
  const catsEl = document.getElementById('albumCats');
  if (catsEl) {
    catsEl.innerHTML = DATA.albumCategories.map(cat => `
      <button class="album-cat ${cat === '전체' ? 'active' : ''}" onclick="filterAlbum('${cat}', this)">${cat}</button>
    `).join('');
  }

  renderAlbumGrid('전체');
}

function filterAlbum(cat, btn) {
  currentAlbumCat = cat;
  document.querySelectorAll('.album-cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAlbumGrid(cat);
}

function renderAlbumGrid(cat) {
  const container = document.getElementById('albumGrid');
  if (!container) return;

  const items = cat === '전체' ? DATA.albumItems : DATA.albumItems.filter(i => i.cat === cat);

  container.innerHTML = items.map(item => `
    <div class="album-thumb" onclick="openPhoto(${item.id})">
      <div class="album-thumb-img album-color-${item.color}" style="display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;">
        <span style="font-size:2.5rem;">${item.emoji}</span>
        <span style="font-size:0.55rem;color:rgba(255,255,255,0.8);font-weight:600;">${item.label}</span>
      </div>
    </div>
  `).join('');
}

function openPhoto(id) {
  const item = DATA.albumItems.find(x => x.id === id);
  if (!item) return;

  const content = document.getElementById('photoModalContent');
  content.innerHTML = `
    <div style="text-align:center; padding: 20px;">
      <div style="font-size:5rem; margin-bottom:16px;">${item.emoji}</div>
      <p style="color:white;font-size:1rem;font-weight:600;">${item.label}</p>
      <p style="color:rgba(255,255,255,0.5);font-size:0.75rem;margin-top:6px;">${item.cat}</p>
      <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.05);border-radius:12px;">
        <p style="color:rgba(255,255,255,0.6);font-size:0.78rem;">📸 실제 사진이 곧 업로드됩니다.<br/>담당자에게 카카오톡으로 공유해 주세요!</p>
      </div>
    </div>
  `;

  document.getElementById('photoModal').classList.add('show');
}

/* ==================================
   GLOBAL SEARCH
   ================================== */
function performGlobalSearch(query) {
  const container = document.getElementById('searchResults');
  if (!container) return;

  const q = query.trim().toLowerCase();

  if (q.length < 1) {
    container.innerHTML = `
      <div class="search-empty-state">
        <div style="font-size:3rem">🔍</div>
        <p>이름, 교회명, 지역, 일정 등을<br/>검색해 보세요</p>
      </div>
    `;
    return;
  }

  const results = [];

  // Search attendees
  DATA.attendees.filter(a =>
    a.name.includes(q) || a.church.toLowerCase().includes(q) || a.region.includes(q)
  ).forEach(a => {
    results.push({
      type: '참석자', icon: '👤',
      title: `${a.name} (${a.church})`,
      detail: `${a.region} · ${a.room}`,
      action: () => { showAttendeeDetail(a.id); }
    });
  });

  // Search notices
  DATA.notices.filter(n =>
    n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q)
  ).forEach(n => {
    results.push({
      type: '공지사항', icon: '🔔',
      title: n.title,
      detail: n.date,
      action: () => { openNotice(n.id); }
    });
  });

  // Search schedule
  DATA.timetable.forEach((day, idx) => {
    const dayLabels = ['4월 20일(월) 1일차', '4월 21일(화) 2일차', '4월 22일(수) 3일차'];
    day.filter(item =>
      item.title.includes(q) || item.detail.includes(q)
    ).forEach(item => {
      results.push({
        type: '일정', icon: '📅',
        title: item.title,
        detail: `${dayLabels[idx]} · ${item.time.replace(/\n/g, ' ')}`,
        action: () => { switchDay(idx, document.getElementById(`dayTab${idx}`)); showPage('schedule'); }
      });
    });
  });

  // Search rooms
  DATA.rooms.forEach(building => {
    building.rooms.forEach(room => {
      if (room.number.toLowerCase().includes(q) ||
          room.residents.some(r => r.name.includes(q) || r.church.toLowerCase().includes(q))) {
        room.residents.forEach(r => {
          if (r.name.includes(q) || r.church.toLowerCase().includes(q)) {
            results.push({
              type: '숙소', icon: '🏨',
              title: `${room.number} - ${r.name}`,
              detail: `${r.church} · ${r.role || building.building}`,
              action: () => { showPage('facility'); }
            });
          }
        });
      }
    });
  });

  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-empty-state">
        <div style="font-size:2.5rem">😕</div>
        <p>"${query}"에 대한 검색 결과가 없습니다</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="padding: 8px 0 10px; font-size:0.72rem; color:var(--text-dim);">검색 결과 ${results.length}건</div>
    ${results.map((r, i) => `
      <div class="search-result-item" onclick="handleSearchClick(${i})">
        <div class="search-result-type">${r.icon} ${r.type}</div>
        <div class="search-result-title">${r.title}</div>
        <div class="search-result-detail">${r.detail}</div>
      </div>
    `).join('')}
  `;

  // Store actions for click
  window.__searchActions = results.map(r => r.action);
}

function handleSearchClick(idx) {
  if (window.__searchActions && window.__searchActions[idx]) {
    window.__searchActions[idx]();
  }
}

function clearSearch() {
  const inp = document.getElementById('globalSearch');
  if (inp) { inp.value = ''; inp.focus(); }
  performGlobalSearch('');
}

/* ==================================
   MODALS
   ================================== */
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

/* ==================================
   MAP
   ================================== */
function openMap() {
  const query = encodeURIComponent('경주 성호리조트');
  // Try Kakao map first for Korean users
  window.open(`https://map.kakao.com/link/search/${query}`, '_blank');
}

/* ==================================
   KAKAO SHARE
   ================================== */
function shareKakao() {
  alert('카카오톡 담당자 ID로 전송해 주세요!\n\n담당자: 서간사\n연락처: 010-1122-3344');
}

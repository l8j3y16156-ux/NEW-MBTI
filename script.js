const questions = [
  {"axis":"EI","prompt":"즐거운 모임을 마치고 집에 돌아왔어요. 남은 저녁은 어떻게 보내고 싶나요?","left":"편한 친구와 통화하며 이야기를 더 나누고 싶어요.","leftPole":"E","right":"좋아하는 음악을 틀고 조용히 쉬고 싶어요."},
  {"axis":"SN","prompt":"처음 가본 동네가 마음에 들었어요. 나중에 그곳을 떠올리면 무엇이 먼저 생각나나요?","left":"그곳의 분위기와 다른 계절에 가면 어떨지 떠올라요.","leftPole":"N","right":"걸었던 길이나 기억에 남은 가게가 떠올라요."},
  {"axis":"TF","prompt":"친구 둘이 다음 모임 장소를 두고 의견이 달라요. 무엇부터 살펴보나요?","left":"이동 시간과 비용을 비교해 어떤 선택이 더 합리적인지 살펴요.","leftPole":"T","right":"각자 그 장소를 고른 이유와 어떤 점을 중요하게 여기는지 들어봐요."},
  {"axis":"JP","prompt":"주말에 한 번도 가본 적 없는 동네로 놀러 가요. 전날에는 무엇을 준비하나요?","left":"가고 싶은 곳 몇 군데를 알아두고, 순서는 현장에서 정해요.","leftPole":"P","right":"꼭 들를 곳을 고르고, 대략적인 순서까지 정해둬요."},
  {"axis":"EI","prompt":"중요한 일을 두고 생각이 엉켜 있어요. 생각을 정리하려면 무엇부터 하나요?","left":"혼자 잠깐 생각하거나 메모하면서 머릿속을 정리해요.","leftPole":"I","right":"편한 사람에게 이야기해 보면서 내 생각을 정리해요."},
  {"axis":"SN","prompt":"새 보드게임을 배울 때 어떤 설명을 들으면 규칙이 더 빨리 와닿나요?","left":"첫 차례에 카드를 어떻게 고르고 점수를 어떻게 받는지 직접 보여주는 설명이요.","leftPole":"S","right":"게임의 전체 목표와 선택에 따라 어떤 판이 펼쳐지는지 먼저 알려주는 설명이요."},
  {"axis":"TF","prompt":"함께 준비한 일에서 친구가 맡은 부분을 놓쳤어요. 먼저 무슨 말을 꺼내나요?","left":"“그때 무슨 일이 있었는지부터 들어보고 싶어.”","leftPole":"F","right":"“어디에서 빠졌는지부터 확인하고 다음에 어떻게 할지 정해보자.”"},
  {"axis":"JP","prompt":"쉬는 날에 집안일 세 가지와 산책을 하고 싶어요. 아침에 하루를 어떻게 시작하나요?","left":"무엇을 먼저 할지 순서를 대략 정한 뒤 시작해요.","leftPole":"J","right":"그때 손이 가는 일부터 하고, 나머지 순서는 상황을 봐요."},
  {"axis":"EI","prompt":"여유가 생긴 저녁에 기분을 환기하고 싶어요. 어느 쪽을 더 자주 고르나요?","left":"혼자 산책하거나 좋아하는 영상 한 편을 봐요.","leftPole":"I","right":"편한 사람을 만나거나 전화해서 가볍게 이야기를 나눠요."},
  {"axis":"SN","prompt":"친구가 주말에 다녀온 전시 이야기를 들려줘요. 어떤 질문이 먼저 떠오르나요?","left":"“그 전시를 보고 어떤 생각이 들었어?”","leftPole":"N","right":"“어떤 작품이 가장 기억에 남았어? 어떻게 생겼어?”"},
  {"axis":"TF","prompt":"함께 준비하는 일정 때문에 한 사람이 유독 불편을 겪고 있어요. 일정을 다시 정할 때 어떤 기준을 먼저 봐요?","left":"누구에게 적용해도 설명할 수 있는 공통 기준이 있는지 봐요.","leftPole":"T","right":"그 사람이 어떤 불편을 겪는지, 조금 조정하면 부담을 덜 수 있는지 봐요."},
  {"axis":"JP","prompt":"해야 할 일이 다음 주에 하나 있고, 그전에 자유롭게 시간을 낼 수 있어요. 어떻게 시작하나요?","left":"마감일만 기억해 두고, 여유가 생길 때 시작해요.","leftPole":"P","right":"언제 시작하고 끝낼지 대략 정해둬요."},
  {"axis":"EI","prompt":"조금 신나는 일이 생겼어요. 그 기분을 즐길 때 무엇이 더 자연스러운가요?","left":"누군가에게 바로 이야기하며 기분을 나누고 싶어요.","leftPole":"E","right":"잠깐 혼자 그 일을 떠올리며 기분을 즐기고 싶어요."},
  {"axis":"SN","prompt":"자주 가던 가게가 새로운 공간으로 바뀐다는 소식을 들었어요. 무엇이 먼저 궁금한가요?","left":"언제 열고, 무엇을 팔고, 매장이 어떻게 바뀌는지 궁금해요.","leftPole":"S","right":"어떤 사람들이 모이게 될지, 주변 분위기도 달라질지 궁금해요."},
  {"axis":"TF","prompt":"친구가 중요한 선택을 앞두고 의견을 물어요. 어떻게 대화를 시작하나요?","left":"“네가 이 선택에서 가장 마음 쓰이는 부분이 뭐야?”","leftPole":"F","right":"“선택지마다 얻는 것과 감수해야 할 게 뭔지 같이 볼까?”"},
  {"axis":"JP","prompt":"함께 저녁 먹기로 한 가게가 문을 닫았어요. 다음으로 어떻게 움직이나요?","left":"근처 후보를 찾아 비교한 뒤 어디로 갈지 정해요.","leftPole":"J","right":"주변을 걸어보면서 그 자리에서 끌리는 곳을 골라요."},
];

const animals = {
  ISTJ: {"name":"비버","emoji":"🦫","summary":"눈앞의 조건을 확인하고 차근차근 순서를 잡으면 마음이 놓이는 편이에요.","reflection":"최근에 미리 순서를 정해둬서 한결 편했던 일은 무엇이었나요?"},
  ISFJ: {"name":"토끼","emoji":"🐇","summary":"가까운 사람의 작은 필요를 알아차리고, 내가 할 수 있는 일을 미리 챙기는 편이에요.","reflection":"최근 누군가에게 필요할 것 같아 미리 챙긴 일이 있었나요?"},
  INFJ: {"name":"사슴","emoji":"🦌","summary":"사람의 말에서 마음에 남는 단서를 발견하면, 혼자 생각을 정리한 뒤 조심스럽게 다가가는 편이에요.","reflection":"누군가의 말이 오래 남았을 때, 나중에 어떤 뜻을 새로 발견했나요?"},
  INTJ: {"name":"올빼미","emoji":"🦉","summary":"조용히 큰 그림을 그려본 뒤, 어디서부터 움직일지 정하면 생각이 또렷해지는 편이에요.","reflection":"일이 복잡할 때 방향을 잡는 데 도움이 된 첫 단서는 무엇이었나요?"},
  ISTP: {"name":"고양이","emoji":"🐈","summary":"혼자 눈앞의 상황을 살피다가, 손으로 직접 해볼 수 있는 방법부터 시도하는 편이에요.","reflection":"최근 직접 해보니 생각했던 것과 달랐던 일은 무엇이었나요?"},
  ISFP: {"name":"수달","emoji":"🦦","summary":"익숙한 사람이나 공간에서 작은 변화를 알아차리고, 그때 어울리는 방식으로 반응하는 편이에요.","reflection":"요즘 평범한 하루에서 유난히 기억에 남은 장면은 무엇이었나요?"},
  INFP: {"name":"판다","emoji":"🐼","summary":"혼자 떠올린 여러 가능성 중에서, 내게 마음이 가는 방향을 천천히 찾아가는 편이에요.","reflection":"조건은 비슷했는데 유독 마음이 기울었던 선택이 있었나요?"},
  INTP: {"name":"문어","emoji":"🐙","summary":"궁금한 점이 생기면 혼자 여러 설명을 떠올리고, 어떤 설명이 가장 잘 맞는지 살피는 편이에요.","reflection":"최근 “다르게 설명할 수도 있겠다”는 생각이 든 일은 무엇이었나요?"},
  ESTP: {"name":"매","emoji":"🦅","summary":"사람들과 움직이면서 눈앞의 변화를 빠르게 살피고, 지금 해볼 수 있는 방법을 고르는 편이에요.","reflection":"계획이 틀어졌을 때 현장에서 바로 골랐던 방법 중 무엇이 잘 맞았나요?"},
  ESFP: {"name":"앵무새","emoji":"🦜","summary":"함께 있는 사람들의 반응을 살피면서, 그 순간 모두가 즐길 만한 일을 떠올리는 편이에요.","reflection":"최근 누군가의 반응을 보고 함께하는 방식을 바꾼 순간이 있었나요?"},
  ENFP: {"name":"여우","emoji":"🦊","summary":"사람과 이야기를 나누다 떠오른 새 가능성에 마음이 가면, 가볍게 먼저 시도해 보는 편이에요.","reflection":"대화 중 떠오른 아이디어가 실제로 해보고 싶은 일로 이어진 적이 있나요?"},
  ENTP: {"name":"까마귀","emoji":"🐦‍⬛","summary":"대화 속에서 여러 생각을 연결하고, 조건을 바꾸면 어떤 답이 나올지 살피는 편이에요.","reflection":"최근 질문을 조금 바꿨더니 다른 답이 보였던 일이 있었나요?"},
  ESTJ: {"name":"개미","emoji":"🐜","summary":"함께 할 일이 생기면 필요한 조건을 확인하고, 사람들이 움직일 수 있도록 순서를 정리하는 편이에요.","reflection":"여럿이 함께한 일에서 어떤 기준을 정했을 때 진행이 수월했나요?"},
  ESFJ: {"name":"코끼리","emoji":"🐘","summary":"사람마다 필요한 것을 물어보고, 함께하는 시간이 편하도록 미리 준비하는 편이에요.","reflection":"함께할 자리를 준비할 때 유독 신경 썼던 사람이나 상황이 있었나요?"},
  ENFJ: {"name":"돌고래","emoji":"🐬","summary":"사람들의 이야기를 들으며 함께 가고 싶은 방향을 찾고, 다음에 할 일을 정리하는 편이에요.","reflection":"의견이 다르던 사람들 사이에서 어떤 공통점이 대화를 이어주었나요?"},
  ENTJ: {"name":"사자","emoji":"🦁","summary":"사람들과 큰 방향을 이야기하고, 어떤 기준과 순서로 움직일지 정할 때 생각이 선명해지는 편이에요.","reflection":"여러 가능성 중 하나를 골라야 했을 때, 마지막 결정에 가장 크게 작용한 기준은 무엇이었나요?"},
};

const axes = [
  {"id":"EI","label":"에너지를 되찾는 방식","leftLabel":"사람과 이야기하기","left":"사람과 이야기를 나누면서 생각이나 기분이 풀리는 편이에요.","rightLabel":"혼자 정리하기","right":"조용히 혼자 보내는 시간이 생각이나 기분을 정리하는 데 도움이 되는 편이에요.","mixed":"어떤 날은 사람과 이야기할 때 기분이 풀리고, 어떤 날은 혼자 쉴 때 에너지가 돌아와요."},
  {"id":"SN","label":"새 정보를 받아들이는 방식","leftLabel":"구체적인 단서 살피기","left":"눈에 보이는 사례나 직접 확인할 수 있는 정보부터 살피면 상황을 이해하기 편해요.","rightLabel":"의미와 가능성 연결하기","right":"여러 단서가 어떻게 이어지는지, 앞으로 어떤 가능성이 있는지 떠올리며 상황을 이해하는 편이에요.","mixed":"구체적인 사례에서 시작할 때도 있고, 전체 맥락이나 앞으로의 가능성부터 떠올릴 때도 있어요."},
  {"id":"TF","label":"결정을 내릴 때 살피는 것","leftLabel":"기준과 조건 살피기","left":"선택지의 조건이나 함께 적용할 수 있는 기준을 먼저 살피는 편이에요.","rightLabel":"사람마다 중요한 점 살피기","right":"당사자가 무엇을 중요하게 여기는지, 결정이 각자에게 어떤 영향을 주는지 먼저 살피는 편이에요.","mixed":"결정에 따라 공통 기준이 먼저 눈에 들어오기도 하고, 사람마다 놓인 상황이 먼저 마음에 쓰이기도 해요."},
  {"id":"JP","label":"일정을 다루는 방식","leftLabel":"순서와 시간을 정해두기","left":"시작할 시간이나 다음 순서를 미리 정해두면 움직이기 편해요.","rightLabel":"상황에 맞춰 고르기","right":"순서를 열어 두고 그날의 상황에 맞춰 고르면 움직이기 편해요.","mixed":"미리 순서를 정해두면 편한 일도 있고, 그때 상황을 보고 고르면 편한 일도 있어요."},
];

const storageKey = 'hidden-animal-test-v1';
const choiceWeights = [2, 1, 1, 2];
const byId = id => document.getElementById(id);
const screens = ['welcome', 'quiz', 'result'];
const choices = Array.from(document.querySelectorAll('input[name="answer"]'));

let state = readState();
let currentResult;

function validAnswers(value) {
  return Array.isArray(value) && value.length === questions.length && value.every(
    answer => answer === null || (Number.isInteger(answer) && answer >= 0 && answer < choiceWeights.length)
  );
}

function readState() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(storageKey));
  } catch {
    // A browser can limit storage for a locally opened file.
  }
  const draft = saved?.draft;
  const latest = saved?.latest;
  return {
    draft: validAnswers(draft?.answers) && Number.isInteger(draft.index) &&
      draft.index >= 0 && draft.index < questions.length ? draft : null,
    latest: validAnswers(latest) && latest.every(answer => answer !== null) ? latest : null,
  };
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    // The current test can continue in memory when storage is unavailable.
  }
}

function show(screen, heading, focus = true) {
  for (const name of screens) byId(name).hidden = name !== screen;
  if (focus) {
    byId(heading).focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

function showWelcome(focus = true) {
  byId('resume').hidden = !state.draft;
  byId('latest').hidden = !state.latest;
  byId('start').firstChild.textContent = state.draft ? '새로 시작 ' : '테스트 시작 ';
  show('welcome', 'welcome-title', focus);
}

function startTest() {
  state.draft = { index: 0, answers: Array(questions.length).fill(null) };
  saveState();
  showQuestion();
}

function updateProgress() {
  const answered = state.draft.answers.filter(answer => answer !== null).length;
  byId('progress-bar').value = answered;
  byId('progress-count').textContent = `응답 ${answered} / ${questions.length}`;
}

function showQuestion() {
  const { index, answers } = state.draft;
  const question = questions[index];
  byId('question-number').textContent = `질문 ${index + 1} / ${questions.length}`;
  byId('question-title').textContent = question.prompt;
  byId('option-a').textContent = question.left;
  byId('option-b').textContent = question.right;
  for (const choice of choices) choice.checked = Number(choice.value) === answers[index];
  byId('back').textContent = index === 0 ? '처음 화면' : '← 이전';
  byId('next').textContent = index === questions.length - 1 ? '결과 보기 →' : '다음 →';
  byId('next').disabled = answers[index] === null;
  updateProgress();
  show('quiz', 'question-title');
}

function scoreAnswers(answers) {
  const observations = questions.map((question, index) => {
    const answer = answers[index];
    const choseLeft = answer < 2;
    const rightPole = question.leftPole === question.axis[0] ? question.axis[1] : question.axis[0];
    return {
      question,
      index,
      pole: choseLeft ? question.leftPole : rightPole,
      weight: choiceWeights[answer],
      response: choseLeft ? question.left : question.right,
    };
  });

  const scores = axes.map(axis => {
    const entries = observations.filter(entry => entry.question.axis === axis.id);
    const score = entries.reduce((sum, entry) => (
      sum + (entry.pole === axis.id[0] ? -entry.weight : entry.weight)
    ), 0);
    // The first question of each axis serves as the representative tie-breaker.
    const pole = score === 0 ? entries[0].pole : axis.id[score > 0 ? 1 : 0];
    return { axis, entries, score, pole };
  });

  const type = scores.map(score => score.pole).join('');
  return { type, scores, animal: animals[type] };
}

function axisDescription({ axis, score }) {
  if (score === 0) return `${axis.mixed} 이번 답변에서는 두 반응이 비슷하게 나타났어요.`;
  const direction = score < 0 ? 'left' : 'right';
  if (Math.abs(score) > 2) return axis[direction];
  return `${axis.mixed} 답변을 종합하면 ‘${axis[`${direction}Label`]}’ 쪽으로 조금 기울었어요.`;
}

function strongestAnswer(entries, pole) {
  return entries.filter(entry => entry.pole === pole).sort(
    (first, second) => second.weight - first.weight || first.index - second.index
  )[0];
}

function addEvidence(parent, entry) {
  const block = document.createElement('blockquote');
  const prompt = document.createElement('p');
  const response = document.createElement('p');
  prompt.textContent = entry.question.prompt;
  response.textContent = `“${entry.response}”`;
  block.append(prompt, response);
  parent.append(block);
}

function showResult(answers) {
  currentResult = scoreAnswers(answers);
  const { type, scores, animal } = currentResult;
  const lastSyllable = animal.name.charCodeAt(animal.name.length - 1);
  const ending = (lastSyllable - 0xac00) % 28 === 0 ? '예요' : '이에요';
  byId('result-title').textContent = `당신 안에 숨어 있는 동물은 ${animal.name}${ending}`;
  byId('result-emoji').textContent = animal.emoji;
  byId('result-type').textContent = type;
  byId('result-summary').textContent = animal.summary;
  byId('reflection').textContent = animal.reflection;

  const cards = byId('axis-grid');
  cards.replaceChildren();
  for (const score of scores) {
    const card = document.createElement('div');
    const heading = document.createElement('h3');
    const description = document.createElement('p');
    card.className = 'axis-card';
    heading.textContent = score.axis.label;
    description.textContent = axisDescription(score);
    card.append(heading, description);
    cards.append(card);
  }

  const evidence = byId('answer-evidence');
  evidence.replaceChildren();
  const strongest = scores.filter(score => score.score !== 0).sort(
    (first, second) => Math.abs(second.score) - Math.abs(first.score)
  ).slice(0, 2);
  if (strongest.length) {
    for (const { entries, pole } of strongest) addEvidence(evidence, strongestAnswer(entries, pole));
  } else {
    const note = document.createElement('p');
    note.textContent = '상황에 따라 서로 다른 반응을 골랐어요. 에너지를 되찾는 방식에서 두 모습을 살펴볼 수 있어요.';
    evidence.append(note);
    for (const pole of scores[0].axis.id) addEvidence(evidence, strongestAnswer(scores[0].entries, pole));
  }

  byId('share-status').hidden = true;
  byId('share-fallback').hidden = true;
  show('result', 'result-title');
}

async function shareResult() {
  const button = byId('share');
  const status = byId('share-status');
  const { type, animal } = currentResult;
  const title = '내 안에 숨어있는 동물';
  const text = `${title}\n${animal.emoji} ${animal.name} (${type})\n${animal.summary}`;
  const url = /^https?:$/.test(location.protocol) ? new URL(location.pathname, location.origin).href : '';
  const copyText = url ? `${text}\n${url}` : text;
  button.disabled = true;
  status.hidden = true;
  byId('share-fallback').hidden = true;

  try {
    if (navigator.share) {
      try {
        await navigator.share(url ? { title, text, url } : { title, text });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(copyText);
      status.textContent = '결과를 복사했어요. 원하는 곳에 붙여넣어 공유해 보세요.';
      status.hidden = false;
    } catch {
      byId('share-fallback').hidden = false;
      const field = byId('share-text');
      field.value = copyText;
      field.focus();
      field.select();
      status.textContent = '아래 결과 문구를 복사해 공유할 수 있어요.';
      status.hidden = false;
    }
  } finally {
    button.disabled = false;
  }
}

byId('start').addEventListener('click', startTest);
byId('resume').addEventListener('click', showQuestion);
byId('latest').addEventListener('click', () => showResult(state.latest));
byId('restart').addEventListener('click', startTest);
byId('share').addEventListener('click', shareResult);

for (const choice of choices) {
  choice.addEventListener('change', () => {
    state.draft.answers[state.draft.index] = Number(choice.value);
    saveState();
    byId('next').disabled = false;
    updateProgress();
  });
}

byId('back').addEventListener('click', () => {
  if (state.draft.index === 0) {
    showWelcome();
    return;
  }
  state.draft.index -= 1;
  saveState();
  showQuestion();
});

byId('next').addEventListener('click', () => {
  const { index, answers } = state.draft;
  if (answers[index] === null) return;
  if (index < questions.length - 1) {
    state.draft.index += 1;
    saveState();
    showQuestion();
    return;
  }
  const unanswered = answers.indexOf(null);
  if (unanswered !== -1) {
    state.draft.index = unanswered;
    saveState();
    showQuestion();
    return;
  }
  state = { draft: null, latest: answers };
  saveState();
  showResult(answers);
});

showWelcome(false);

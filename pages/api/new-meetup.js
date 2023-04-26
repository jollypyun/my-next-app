// 서버 사이드 코드를 포함하는 함수를 정의
// 리액트 컴포넌트 함수, 렌더링 등의 작업 하지 않음.
// /api/new-meetup

function handler(req,res) {
    if (req.method === 'POST') {
        const data = req.body;
        const {title, image, address, description} = data
    }
}

export default handler
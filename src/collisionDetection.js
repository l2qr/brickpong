export function detectCollision(ball, gameObject) {
  let bottomBall = ball.position.y + ball.size;
  let topBall = ball.position.y;

  let topSide = gameObject.position.y;
  let leftSide = gameObject.position.x;
  let rightSide = gameObject.position.x + gameObject.width;
  let bottomSide = gameObject.position.y + gameObject.height;

  if (
    bottomBall >= topSide &&
    topBall <= bottomSide &&
    ball.position.x >= leftSide &&
    ball.position.x + ball.size <= rightSide
  ) {
    return true;
  } else {
    return false;
  }
}

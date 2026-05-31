export default function decorate(block) {
  const [imageRow, titleRow, textRow, ctaRow] = [...block.children];

  const picture = imageRow?.querySelector('picture');
  const titleCell = titleRow?.firstElementChild;
  const textCell = textRow?.firstElementChild;
  const link = ctaRow?.querySelector('a');

  block.innerHTML = '';

  if (picture) {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'teaser-large-image';
    imageDiv.append(picture);
    block.append(imageDiv);
  }

  const body = document.createElement('div');
  body.className = 'teaser-large-body';

  if (titleCell) {
    titleCell.className = 'teaser-large-title';
    body.append(titleCell);
  }

  if (textCell) {
    textCell.className = 'teaser-large-text';
    body.append(textCell);
  }

  if (link) {
    link.classList.add('button', 'secondary');
    const ctaWrapper = document.createElement('p');
    ctaWrapper.className = 'teaser-large-cta';
    ctaWrapper.append(link);
    body.append(ctaWrapper);
  }

  block.append(body);
}

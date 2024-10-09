// Script to toggle more members
const moreMembersBtn = document.getElementById('more-members-btn');
const moreMembers = document.getElementById('more-members');

moreMembersBtn.addEventListener('click', function () {
    moreMembers.style.display = moreMembers.style.display === 'none' ? 'flex' : 'none';
});
script {
  use gui_id_contract::GUI_ID;
  use std::signer;

  fun main(account: signer) {
    GUI_ID::initialize(&account);
    GUI_ID::stake_gui(&account, 100);
    let addr = signer::address_of(&account);
    GUI_ID::tip_user(&account, addr, 50);
    GUI_ID::mint_badge(&account, addr, 10);
    GUI_ID::earn_xp(addr, 25);
    // If execution completes without abort, test is successful
  }
}

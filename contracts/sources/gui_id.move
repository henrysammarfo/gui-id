address gui_id_contract {
  module GUI_ID {
    use std::signer;
    use aptos_std::table::{Self, Table};

    struct UserReputation has key {
      xp: u64,
      reputation: u64,
    }

    struct ReputationStore has key {
      rep_table: Table<address, UserReputation>,
    }

    public entry fun initialize(admin: &signer) {
      let addr = signer::address_of(admin);
      assert!(!exists<ReputationStore>(addr), 1);
      move_to<ReputationStore>(admin, ReputationStore {
        rep_table: Table::new<address, UserReputation>()
      });
    }

    public entry fun stake_gui(user: &signer, amount: u64) {
      let addr = signer::address_of(user);
      let store = borrow_global_mut<ReputationStore>(addr);
      Table::upsert(&mut store.rep_table, addr, UserReputation {
        xp: amount,
        reputation: amount
      });
    }

    public entry fun tip_user(user: &signer, recipient: address, amount: u64) {
      let tipper = signer::address_of(user);
      let store_tip = borrow_global_mut<ReputationStore>(tipper);
      let store_rec = borrow_global_mut<ReputationStore>(recipient);
      Table::upsert(&mut store_tip.rep_table, tipper, UserReputation {
        xp: 0,
        reputation: amount
      });
      Table::upsert(&mut store_rec.rep_table, recipient, UserReputation {
        xp: 0,
        reputation: amount
      });
    }

    public fun earn_xp(user: address, amount: u64) {
      let store = borrow_global_mut<ReputationStore>(user);
      let rep_ref = Table::borrow_mut(&mut store.rep_table, user);
      rep_ref.xp = rep_ref.xp + amount;
    }

    public entry fun mint_badge(admin: &signer, recipient: address, badge_id: u64) {
      // Simplified badge logic: award XP equal to badge_id
      earn_xp(recipient, badge_id);
    }
  }
}

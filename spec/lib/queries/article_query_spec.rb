describe Queries::ArticleQuery do
  describe '#query' do
    before do
      11.times.each do
        Article.create(
            title: ::Faker::Lorem.sentence,
            subtitle: ::Faker::Lorem.sentence,
            image_url: ::Faker::Internet.url,
            content: ::Faker::Lorem.sentence,
            published_at: rand(1..12).minutes.ago)
      end
    end

    let(:per_page) { 10 }
    let(:query_param) { nil }
    subject { described_class.query(page, per_page, query_param) }

    context 'when it is the first page' do
      context 'when page is specific' do
        let(:page) { 1 }

        it 'should return list of first 10' do
          expect(subject.size).to eq 10
        end
      end
    end

    context 'when it is the second page' do
      let(:page) { 2 }

      it 'should return list of 1' do
        expect(subject.size).to eq 1
      end
    end

    context 'search article' do
      let(:page) { 1 }
      let(:query_param) { Article.first.title }

      it 'should return first article' do
        expect(subject.size).to eq 1
        expect(subject.first.id).to eq Article.first.id
      end
    end
  end
end